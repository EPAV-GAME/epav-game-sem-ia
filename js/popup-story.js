/* Integração dos roteiros recebidos com as telas, pausa e progresso do EPAV. */
(() => {
 'use strict';
 const motor=globalThis.EpavPopupMotor, banco=globalThis.EpavPopupDados;
 const keys=['lucas','marina','rafael','camila','andre'];
 const factLabels={rotina_de_consumo:'Rotina de consumo investigada',motivo_da_objecao:'Motivo da objeção conversado',prioridade_de_compra:'Prioridade de compra identificada'};
 const skills={abordagem:'abordagem',descoberta:'pergunta',aprofundamento:'necessidade',
  objecoes:'objecao',escuta_e_investigacao:'necessidade',apresentacao_consultiva:'oferta',fechamento_respeitoso:'fechamento'};
 function dados(cliente) {return banco[keys[Number(cliente.id.slice(-1))-1]];}
 function roteiro(estado) {
  (estado.fatosDescobertos || []).forEach(f=>{f.rotulo=factLabels[f.rotulo] || f.rotulo;});
  const c=dados(estado.clienteAtual);
  if(!estado.roteiroPopup || estado.roteiroPopup.cliente!==c.name) estado.roteiroPopup=motor.criarEstado(c);
  estado.roteiroPopup.confianca=estado.satisfacao;
  return estado.roteiroPopup;
 }
 function qualidade(points) {return points>=10?'excelente':points>=6?'boa':points>=4?'neutra':points>0?'ruim':'muitoRuim';}
 for(const cliente of clientes) {
  const c=dados(cliente);
  cliente.perfil=c.profile;cliente.licao=c.learning+' '+c.note;
  cliente.noInicial=c.etapas[0].id;cliente.decisoes=c.etapas.length;
  cliente.satisfacaoInicial=50;
  cliente.dialogo=Object.fromEntries(c.etapas.map((stage,i)=>[stage.id,{
   id:stage.id,epavPopup:true,texto:stage.contexto_visivel,popup:stage.popup_produtos_ref,
   opcoes:stage.alternativas_cadastradas.map(option=>({id:option.id,texto:option.fala_vendedor,
    categoria:skills[option.habilidade_avaliada] || 'necessidade',pontos:option.pontos,
    qualidade:qualidade(option.pontos),pesoQualidade:option.pontos>=8?2:option.pontos>=4?1:-1,
    correta:option.pontos>=8,efeitoSatisfacao:option.variacao_confianca,
    feedback:option.feedback,resposta:option.resposta_cliente,proximoNo:c.etapas[i+1]?.id || null}))
  }]));
 }
 function iniciar(estado) {estado.roteiroPopup=motor.criarEstado(dados(estado.clienteAtual));estado.roteiroPopup.confianca=estado.satisfacao;}
 function preparar(no,estado) {
  const s=roteiro(estado),c=dados(estado.clienteAtual),scene=motor.proximaCena(c,s);
  if(!scene) return {texto:'Atendimento encerrado.',opcoes:[]};
  if(scene.tipo==='popup_produtos') return {texto:'Escolha uma opção para esta parte da refeição. A proposta será discutida com o cliente antes de decidir uma compra.',opcoes:[]};
  return {texto:scene.clienteFala || scene.contexto,opcoes:scene.alternativas.map(a=>({...no.opcoes.find(o=>o.id===a.id),texto:a.texto}))};
 }
 function produto(estado,code) {
  const s=roteiro(estado),c=dados(estado.clienteAtual);
  const feedback=motor.escolherProduto(c,s,estado.noAtual,code);
  estado.satisfacao=s.confianca;
  return feedback;
 }
 function escolher(opcao,estado) {
  const s=roteiro(estado),c=dados(estado.clienteAtual);
  // Timer penalties belong to the same confidence meter.
  s.confianca=estado.satisfacao;
  const reply=motor.escolher(c,s,estado.noAtual,opcao.id);
  s.revelacoes.forEach((text,i)=>registrarDescoberta({chave:'popup-'+i,rotulo:factLabels[text] || text.replaceAll('_',' ')}));
  return {...opcao,texto:reply.vendedor,pontos:reply.pontosDaEscolha,
   efeitoSatisfacao:reply.confianca-estado.satisfacao,feedback:reply.feedback,resposta:reply.cliente,
   qualidade:qualidade(reply.pontosDaEscolha),
   proximoNo:reply.encerrado?null:c.etapas[s.etapaIndex]?.id || null};
 }
 function referencias(cliente,category,code) {
  const options=dados(cliente).escolha_produtos_popup[category].opcoes;
  const p=options.find(item=>String(item.codigo)===String(code));
  const masses=options.map(item=>item.massa_margem_estimada_ref).filter(Number.isFinite).sort((a,b)=>a-b);
  const position=(masses.length-1)*.7,low=Math.floor(position);
  const threshold=masses.length?masses[low]+(masses[Math.ceil(position)]-masses[low])*(position-low):Infinity;
  return {mcPct:p.mc_pct_ref,massaMargem:p.massa_margem_estimada_ref,
   destaque:p.mc_pct_ref>=25 || p.massa_margem_estimada_ref>=threshold};
 }
 globalThis.EpavPopup={iniciar,preparar,produto,escolher,referencias,
  cartoes:(cliente,category)=>dados(cliente).escolha_produtos_popup[category].opcoes.map(p=>({
   id:String(p.codigo),codigo:String(p.codigo),nome:p.nome,marca:'Swift',tiposProduto:[],ocasioes:[],
   formato:null,unidade_medida:null,peso_embalagem_kg:null,imagem_url:null})),
  resultado:estado=>motor.resultado(roteiro(estado))};
})();
