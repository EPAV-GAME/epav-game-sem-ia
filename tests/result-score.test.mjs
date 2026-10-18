import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../js/game.js',import.meta.url),'utf8');
function load(name,next,context) {
  const start=source.indexOf(`function ${name}(`);
  vm.runInContext(source.slice(start,source.indexOf(`function ${next}(`,start)),context);
}

test('result highlights overall grade while persistence keeps the overall grade on the 500-point scale',()=>{
  const elements=new Map();
  let saved;
  const c=vm.createContext({
    estado:{pontuacaoAtendimento:83,pontuacaoTotal:0,satisfacao:90,satisfacaoAcumulada:0,
      indiceClienteAtual:0,resultadosAprendizado:[],fatosDescobertos:[],clienteAtual:{licao:'Lição'}},
    window:{EpavPopup:{resultado:()=>({notaDialogos:83,notaProdutos:60,notaGeral:75,produtosSelecionados:5,ressalva:''})}},
    document:{getElementById:id=>{
      if(!elements.has(id))elements.set(id,{classList:{toggle(){}}});
      return elements.get(id);
    },querySelector:()=>null},
    pausarTempoAtendimento(){},salvarProgresso(){saved=JSON.parse(JSON.stringify(c.estado));},
    avaliarCompetencias:()=>({forte:'',melhoria:''}),emojiSatisfacao:()=>'',mostrarTela(){}
  });
  load('finalizarAtendimento','mostrarResultadoAtendimento',c);
  load('mostrarResultadoAtendimento','continuarAposResultado',c);
  c.finalizarAtendimento();
  assert.equal(elements.get('pontos-atendimento').textContent,'+75 pontos');
  assert.equal(saved.resultadosAprendizado[0].notaGeral,75);
  assert.equal(saved.pontuacaoTotal,75);
  c.estado.atendimentoExpulso=true;
  c.mostrarResultadoAtendimento();
  assert.equal(elements.get('pontos-atendimento').textContent,'0 pontos · tempo esgotado');
});

test('success cutscene accepts best available choices for every client and rejects incomplete or imperfect runs',()=>{
 const c=vm.createContext({clientes:[{},{},{},{},{}],estado:{pontuacaoTotal:360,
  resultadosAprendizado:Array.from({length:5},()=>({melhoresEscolhas:true}))}});
 load('mereceCutsceneSucesso','finalizarJogo',c);
 assert.equal(c.mereceCutsceneSucesso(),true);
 c.estado.resultadosAprendizado[2].melhoresEscolhas=false;
 assert.equal(c.mereceCutsceneSucesso(),false);
 c.estado.resultadosAprendizado.pop();
 assert.equal(c.mereceCutsceneSucesso(),false);
 c.estado.pontuacaoTotal=500;
 assert.equal(c.mereceCutsceneSucesso(),true);
});

test('saved 97 and 81 grades restore as 178 and do not convert again on subsequent resumes',()=>{
 let saved={versao:6,etapa:'escritorio',indiceClienteAtual:2,pontuacaoTotal:143,
  resultadosAprendizado:[{notaGeral:97},{notaGeral:81}]};
 const c=vm.createContext({clientes:[{id:'c1'},{id:'c2'},{id:'c3'}],CHAVE_PROGRESSO:'save',
  CHAVES_PROGRESSO_ANTIGAS:[],localStorage:{getItem:()=>JSON.stringify(saved)}});
 load('lerProgresso','continuarPartidaSalva',c);
 const migrated=c.lerProgresso();
 assert.equal(migrated.pontuacaoTotal,178);
 assert.equal(migrated.versao,7);
 saved=migrated;
 assert.equal(c.lerProgresso().pontuacaoTotal,178);
 saved={...saved,versao:6,etapa:'resultado',clienteId:'c2',indiceClienteAtual:1,atendimentoExpulso:true};
 assert.equal(c.lerProgresso().pontuacaoTotal,97);
});

test('ranking publishes the exact 500 point total without conversion',()=>{
 const c=vm.createContext({ultimaTentativaId:'test',lerHistorico:()=>[
  {id:'test',versao:7,maximo:500,pontuacao:500,tempoJogadoMs:1000} ]});
 load('obterTentativaParaRanking','marcarTentativaPublicada',c);
 assert.equal(c.obterTentativaParaRanking().pontos,500);
});
