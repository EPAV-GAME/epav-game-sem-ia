/* Motor do pacote recebido. Sorteios preservados na retomada. */
(() => {
/**
 * EPAV v1.2 — motor determinístico sem IA.
 * Produtos: popup com 5 cards clicáveis, sem A–D.
 * Conversa: sempre 4 alternativas A–D, com banco amplo e embaralhado.
 *
 * import dados from './dialogos_epav_popup_produtos.json' with { type: 'json' };
 * const cliente = dados.clientes.lucas;
 * const estado = criarEstado(cliente);
 * let tela = proximaCena(cliente, estado);
 * // tela.tipo = 'dialogo' ou 'popup_produtos'
 * // se tela.tipo === 'popup_produtos': escolha um código com escolherProduto(...)
 * // mostre feedbackEducativo e depois chame proximaCena(...) novamente
 * // se tela.tipo === 'dialogo': use escolher(...) com idAlternativa exibido
 */
const limitar=(v,min,max)=>Math.min(max,Math.max(min,v));
const embaralhar=(a,rng=Math.random)=>{
  const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;
};
const nivel=c=>c>=65?'open':c<35?'closed':'neutral';
const montarTexto=(s,produto)=>String(s||'').replaceAll('{produto}', produto||'a opção escolhida');
function criarEstado(cliente,rng=Math.random){
  return {cliente:cliente.name, etapaIndex:0, confianca:50, respostas:[], pontos:0,
    porHabilidade:{}, revelacoes:[], encerrado:false, motivoEncerramento:null,
    historicoAlternativas:{}, produtosEscolhidos:{}, pontosProdutos:0,
    cenario:Math.floor(rng()*cliente.cenario_variavel.contextos.length)};
}
function proximaCena(cliente,estado,rng=Math.random){
  if(estado.encerrado)return null;
  const etapa=cliente.etapas[estado.etapaIndex];if(!etapa)return null;
  const categoria=etapa.popup_produtos_ref;
  // A escolha do produto NÃO é um diálogo A–D.
  if(categoria && !estado.produtosEscolhidos[categoria]){
    const popup=cliente.escolha_produtos_popup[categoria];
    return {tipo:'popup_produtos',etapaId:etapa.id,categoria,
      titulo:`Escolha um produto: ${popup.titulo}`,
      instrucao:'Escolha um dos cinco produtos para recomendar. Após a escolha, haverá um feedback.',
      opcoes:embaralhar(popup.opcoes,rng).map(p=>({codigo:p.codigo,nome:p.nome,id:p.id}))};
  }
  const grupo=etapa.alternativas_cadastradas;
  const fortes=embaralhar(grupo.filter(a=>a.pontos>=8),rng);
  const medias=embaralhar(grupo.filter(a=>a.pontos>=4&&a.pontos<8),rng);
  const desafios=embaralhar(grupo.filter(a=>a.pontos<4),rng);
  let opcoes=[...fortes.slice(0,2),...medias.slice(0,1),...desafios.slice(0,1)];
  const ids=new Set(opcoes.map(a=>a.id));
  for(const a of embaralhar(grupo,rng)){if(opcoes.length>=4)break;if(!ids.has(a.id)){opcoes.push(a);ids.add(a.id)}}
  const anteriores=estado.historicoAlternativas[etapa.id];
  opcoes=anteriores?.length===4?anteriores.map(id=>grupo.find(o=>o.id===id)):embaralhar(opcoes,rng);
  estado.historicoAlternativas[etapa.id]=opcoes.map(o=>o.id);
  const produto=categoria?estado.produtosEscolhidos[categoria]:null;
  const faixa=produto&&produto.pontos<=3?'closed':nivel(estado.confianca);
  const falas=etapa.falas_cliente_por_confianca[faixa]||[];
  estado.falasExibidas ||= {};
  const chaveFala=etapa.id+':'+faixa;
  if(!(chaveFala in estado.falasExibidas)) estado.falasExibidas[chaveFala]=falas.length?falas[Math.floor(rng()*falas.length)]:null;
  const fala=estado.falasExibidas[chaveFala];
  return {tipo:'dialogo', etapaId:etapa.id, titulo:etapa.titulo,
    clienteFala:etapa.cliente_fala_antes_da_primeira_escolha?fala:null,
    contexto:estado.etapaIndex===0?cliente.cenario_variavel.contextos[estado.cenario]:etapa.contexto_visivel,
    produtoEscolhido:produto?{codigo:produto.codigo,nome:produto.nome}:null,
    alternativas:opcoes.map((o,i)=>({letra:'ABCD'[i],texto:montarTexto(o.fala_vendedor,produto?.nome),id:o.id}))};
}
function escolherProduto(cliente,estado,etapaId,codigo){
  if(estado.encerrado)throw Error('Atendimento já encerrado');
  const etapa=cliente.etapas[estado.etapaIndex];
  if(!etapa||etapa.id!==etapaId||!etapa.popup_produtos_ref)throw Error('Etapa de produto inválida');
  const categoria=etapa.popup_produtos_ref;
  if(estado.produtosEscolhidos[categoria])throw Error('Produto dessa categoria já selecionado');
  const popup=cliente.escolha_produtos_popup[categoria];
  const escolhido=popup.opcoes.find(o=>String(o.codigo)===String(codigo));
  if(!escolhido)throw Error('Código inexistente nas cinco opções deste pop-up');
  // Persistir o estado para liberar o diálogo da MESMA etapa após o feedback.
  const sel={categoria,codigo:escolhido.codigo,nome:escolhido.nome,
     pontos:escolhido.pontuacao,classificacao:escolhido.classificacao,
     feedback:escolhido.feedback};
  estado.produtosEscolhidos[categoria]=sel;
  estado.pontosProdutos+=escolhido.pontuacao;
  estado.porHabilidade.analise_de_produtos=(estado.porHabilidade.analise_de_produtos||0)+escolhido.pontuacao;
  estado.confianca=limitar(estado.confianca+(escolhido.pontuacao>=9?3:escolhido.pontuacao>=6?1:escolhido.pontuacao<=0?-6:-2),0,100);
  return {
    tipo:'feedback_produto',etapaId,categoria,
    produto:{codigo:sel.codigo,nome:sel.nome},
    pontosDaEscolha:escolhido.pontuacao,maximoPontos:10,
    classificacao:escolhido.classificacao,
    feedbackEducativo:escolhido.feedback,
    orientacao:'Não escolha só pela margem: considere uso, quantidades, restrições e custo total.',
    indicadoresFinanceiros:{mcPctReferencia:escolhido.mc_pct_ref,
      massaMargemEstimadaReferencia:escolhido.massa_margem_estimada_ref,
      ressalva:'Valores históricos/estimados; não são preços ou margens atuais.'},
    acaoSeguinte:'Exibir feedback; depois continuar com as quatro alternativas A–D para explicar esse produto.'
  };
}
function escolher(cliente,estado,etapaId,idAlternativa){
  if(estado.encerrado)throw Error('Atendimento já encerrado');
  const etapa=cliente.etapas[estado.etapaIndex];
  if(!etapa||etapa.id!==etapaId)throw Error('Etapa não corresponde ao estado');
  if(etapa.popup_produtos_ref&&!estado.produtosEscolhidos[etapa.popup_produtos_ref])
    throw Error('Selecione o produto no pop-up antes do diálogo');
  if(!(estado.historicoAlternativas[etapaId]||[]).includes(idAlternativa))
    throw Error('Alternativa A–D não exibida neste turno');
  const escolha=etapa.alternativas_cadastradas.find(x=>x.id===idAlternativa);
  const p=etapa.popup_produtos_ref?estado.produtosEscolhidos[etapa.popup_produtos_ref]:null;
  let pontosAplicados=escolha.pontos;
  const avisos=[];
  if(p&&p.pontos<=3){
    avisos.push('A forma de apresentar pode ser respeitosa, mas o produto selecionado continua inadequado à necessidade.');
    // Avaliação comportamental permanece separada; reação do cliente é mais resistente.
  }
  if(p&&['marina','camila'].includes(cliente.name.toLowerCase())&&
    escolha.intencao==='afirmacao_insegura'){
    pontosAplicados=0;
    avisos.push('É necessário verificar ingredientes e modo de preparo antes de garantir adequação.');
  }
  estado.pontos+=pontosAplicados;
  estado.confianca=limitar(estado.confianca+escolha.variacao_confianca+(p&&p.pontos<=3?-4:0),0,100);
  const h=escolha.habilidade_avaliada;
  estado.porHabilidade[h]=(estado.porHabilidade[h]||0)+pontosAplicados;
  estado.respostas.push({etapa:etapa.id,alternativa:escolha.id,pontos:pontosAplicados,habilidade:h,avisos});
  for(const f of escolha.revelar_ao_escolher){if(!estado.revelacoes.includes(f))estado.revelacoes.push(f)}
  const respeitarLimite=(etapa.etapa==='objection'&&escolha.intencao==='limite'&&estado.confianca<45)||
   (etapa.etapa==='start'&&estado.cenario===2&&escolha.intencao==='respeito'&&
     /outro momento|volte depois|passe em outro momento|prefere depois/i.test(escolha.fala_vendedor));
  estado.etapaIndex++;
  if(respeitarLimite){estado.encerrado=true;estado.motivoEncerramento='Retorno futuro respeitoso, sem venda';}
  else if(estado.confianca<=18&&escolha.pode_encerrar){estado.encerrado=true;estado.motivoEncerramento='Limite do cliente ultrapassado';}
  if(!cliente.etapas[estado.etapaIndex]){estado.encerrado=true;estado.motivoEncerramento=estado.motivoEncerramento||'Atendimento concluído';}
  const clienteDiz=respeitarLimite?'Agora não consigo continuar. Obrigado por respeitar meu momento.':
    p&&p.pontos<=3?'Ainda não consigo enxergar essa opção como adequada para mim.':escolha.resposta_cliente;
  return {tipo:'feedback_dialogo',vendedor:montarTexto(escolha.fala_vendedor,p?.nome),
    cliente:clienteDiz,feedback:[escolha.feedback,...avisos].join(' '),
    pontosDaEscolha:pontosAplicados,confianca:estado.confianca,encerrado:estado.encerrado};
}
function resultado(estado){
  const qtdD=estado.respostas.length;
  const qtdP=Object.keys(estado.produtosEscolhidos).length;
  const notaDialogo=qtdD?Math.round(estado.pontos/qtdD*10):0;
  const notaProdutos=qtdP?Math.round(estado.pontosProdutos/qtdP*10):0;
  const notaGeral=qtdD&&qtdP?Math.round(notaDialogo*0.65+notaProdutos*0.35):qtdD?notaDialogo:notaProdutos;
  return {notaGeral:limitar(notaGeral,0,100),notaDialogos:limitar(notaDialogo,0,100),
    notaProdutos:limitar(notaProdutos,0,100),pontosDialogos:estado.pontos,
    pontosProdutos:estado.pontosProdutos,decisoesDialogo:qtdD,produtosSelecionados:qtdP,
    escolhasProdutos:estado.produtosEscolhidos,porHabilidade:estado.porHabilidade,
    confianca:estado.confianca,encerrado:estado.encerrado,motivo:estado.motivoEncerramento,
    ressalva:qtdP<5?'Atendimento parcial: não foram selecionados todos os cinco produtos.':''};
}

globalThis.EpavPopupMotor={criarEstado,proximaCena,escolherProduto,escolher,resultado};
})();
