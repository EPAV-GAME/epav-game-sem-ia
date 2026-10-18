import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {criarEstado,proximaCena,escolherProduto,escolher,resultado} from '../js/popup-engine.mjs';
const ctx=vm.createContext({});
vm.runInContext(readFileSync(new URL('../js/popup-data.js',import.meta.url),'utf8'),ctx);
const bank=ctx.EpavPopupDados;
test('every teaching group has exactly five fixed SKUs with concealed classifications and scores',()=>{
 for(const client of Object.values(bank)) {
  assert.ok(client.etapas.every(e=>e.alternativas_cadastradas.length>=8));
  for(const popup of Object.values(client.escolha_produtos_popup)) {
   assert.equal(new Set(popup.opcoes.map(p=>p.codigo)).size,5);
   assert.deepEqual([...popup.opcoes.map(p=>p.pontuacao)].sort((a,b)=>a-b),[0,3,6,7,10]);
  }
  const state=criarEstado(client,()=>0);state.etapaIndex=4;
  const scene=proximaCena(client,state);
  assert.equal(scene.tipo,'popup_produtos');
  assert.ok(scene.opcoes.every(o=>Object.keys(o).sort().join(',')==='codigo,id,nome'));
 }
});
test('all clients can complete five products; dialogue mentions the actual selection, and resume cannot award it twice',()=>{
 for(const client of Object.values(bank)) {
  const state=criarEstado(client,()=>0);
  while(!state.encerrado) {
   const stage=client.etapas[state.etapaIndex];
   let scene=proximaCena(client,state,()=>.2);
   if(scene.tipo==='popup_produtos') {
    const p=client.escolha_produtos_popup[scene.categoria].opcoes.find(p=>p.pontuacao===10);
    const reply=escolherProduto(client,state,stage.id,p.codigo);
    assert.equal(reply.pontosDaEscolha,10);
    assert.throws(()=>escolherProduto(client,state,stage.id,p.codigo));
    scene=proximaCena(client,state,()=>.2);
    assert.ok(scene.alternativas.every(o=>!o.texto.includes('{produto}')));
    assert.ok(scene.alternativas.some(o=>o.texto.includes(p.nome)));
   }
   const ids=scene.alternativas.map(o=>o.id);
   const resumed=JSON.parse(JSON.stringify(state));
   assert.deepEqual(proximaCena(client,resumed,()=>.9).alternativas.map(o=>o.id),ids);
   assert.equal(scene.alternativas.length,4);
   const good=scene.alternativas.filter(o=>stage.alternativas_cadastradas.find(a=>a.id===o.id).pontos>8);
   assert.ok(good.length>=1);
   escolher(client,state,stage.id,good[0].id);
  }
  const assessment=resultado(state);
  assert.equal(assessment.produtosSelecionados,5);
  assert.equal(assessment.notaProdutos,100);
  assert.equal(assessment.notaGeral,Math.round(assessment.notaDialogos*.65+35));
 }
});
test('a respectful early return is a valid partial learning result without a compulsory basket penalty',()=>{
 const client=bank.lucas,state=criarEstado(client,()=>.9);
 const scene=proximaCena(client,state,()=>0);
 const option=client.etapas[0].alternativas_cadastradas.find(o=>o.fala_vendedor.includes('passe em outro momento'));
 state.historicoAlternativas[scene.etapaId]=[option.id];
 escolher(client,state,scene.etapaId,option.id);
 const score=resultado(state);
 assert.equal(state.encerrado,true);
 assert.match(score.motivo,/respeitoso/);
 assert.equal(score.produtosSelecionados,0);
 assert.equal(score.notaGeral,option.pontos*10);
});
test('wrong unshown dialogue options and foreign product codes are rejected',()=>{
 const client=bank.marina,state=criarEstado(client,()=>0);
 const scene=proximaCena(client,state,()=>0);
 assert.throws(()=>escolher(client,state,scene.etapaId,'inventado'));
 state.etapaIndex=4;
 assert.throws(()=>escolherProduto(client,state,client.etapas[4].id,'999999'));
});
test('the screen adapter uses the same confidence meter as timer penalties and resumes its drawn options',()=>{
 const app=vm.createContext({registrarDescoberta:()=>{}});
 for(const file of ['clientsData.js','popup-data.js','popup-engine.js','popup-story.js'])
  vm.runInContext(readFileSync(new URL('../js/'+file,import.meta.url),'utf8'),app);
 const client=vm.runInContext('clientes[0]',app);
 const state={clienteAtual:client,noAtual:client.noInicial,satisfacao:50,fatosDescobertos:[]};
 app.EpavPopup.iniciar(state);state.roteiroPopup.cenario=0;
 const initial=app.EpavPopup.preparar(client.dialogo[state.noAtual],state);
 state.satisfacao=20;
 const resumed=app.EpavPopup.preparar(client.dialogo[state.noAtual],state);
 assert.equal(state.roteiroPopup.confianca,20);
 assert.deepEqual([...initial.opcoes].map(o=>o.id),[...resumed.opcoes].map(o=>o.id));
});

test('best available dialogue choices qualify for success even when the draw omits ten points',()=>{
 let belowPerfect=false;
 for(const client of Object.values(bank)) {
  const state=criarEstado(client,()=>0);
  while(!state.encerrado) {
   const stage=client.etapas[state.etapaIndex];
   let scene=proximaCena(client,state,()=>0);
   if(scene.tipo==='popup_produtos') {
    const ideal=client.escolha_produtos_popup[scene.categoria].opcoes.find(p=>p.pontuacao===10);
    escolherProduto(client,state,stage.id,ideal.codigo);
    scene=proximaCena(client,state,()=>0);
   }
   const best=scene.alternativas.map(o=>stage.alternativas_cadastradas.find(a=>a.id===o.id))
    .sort((a,b)=>b.pontos-a.pontos)[0];
   escolher(client,state,stage.id,best.id);
  }
  const score=resultado(state);
  assert.equal(score.melhoresEscolhas,true);
  if(score.notaGeral<100)belowPerfect=true;
  const restored=JSON.parse(JSON.stringify(state));
  assert.equal(resultado(restored).melhoresEscolhas,true);
  restored.respostas[0].pontos--;
  assert.equal(resultado(restored).melhoresEscolhas,false);
  const wrongProduct=JSON.parse(JSON.stringify(state));
  Object.values(wrongProduct.produtosEscolhidos)[0].pontos=7;
  assert.equal(resultado(wrongProduct).melhoresEscolhas,false);
  state.motivoEncerramento='Retorno futuro respeitoso, sem venda';
  assert.equal(resultado(state).melhoresEscolhas,false);
 }
 assert.equal(belowPerfect,true);
});

test('varied draws always include a score above eight, keep unique choices and persist on resume',()=>{
 const browser=vm.createContext({});
 vm.runInContext(readFileSync(new URL('../js/popup-engine.js',import.meta.url),'utf8'),browser);
 for(const engine of [{criarEstado,proximaCena},browser.EpavPopupMotor]) {
  for(const client of Object.values(bank)) {
   for(let index=0;index<client.etapas.length;index++) {
    const stage=client.etapas[index],combinations=new Set();
    for(let seed=1;seed<=30;seed++) {
     let value=seed;
     const rng=()=>{value=(Math.imul(value,1664525)+1013904223)>>>0;return value/4294967296;};
     const state=engine.criarEstado(client,rng);
     state.etapaIndex=index;
     if(stage.popup_produtos_ref)state.produtosEscolhidos[stage.popup_produtos_ref]={pontos:10,nome:'Produto'};
     const scene=engine.proximaCena(client,state,rng);
     const ids=Array.from(scene.alternativas,o=>o.id);
     assert.equal(ids.length,4);
     assert.equal(new Set(ids).size,4);
     assert.ok(ids.some(id=>stage.alternativas_cadastradas.find(a=>a.id===id).pontos>8));
     combinations.add([...ids].sort().join(','));
     const restored=JSON.parse(JSON.stringify(state));
     assert.deepEqual(Array.from(engine.proximaCena(client,restored,rng).alternativas,o=>o.id),ids);
    }
    assert.ok(combinations.size>1);
   }
  }
 }
});
