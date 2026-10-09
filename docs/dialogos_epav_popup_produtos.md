# EPAV — Diálogos A–D + seleção de produtos por pop-up

**Versão 1.2, sem IA.** A–D existe apenas nas falas do vendedor. Cada uma das cinco categorias oferece cinco cards de produtos em um pop-up distinto. A escolha gera feedback imediatamente.

## Como funciona

1. O vendedor inicia o atendimento; as respostas do diálogo seguem A–D.
2. Em cada categoria o jogo abre um pop-up com cinco produtos, sem letras A–D.
3. Ao selecionar, o aluno recebe imediatamente nota (0–10) e uma justificativa.
4. O pop-up fecha ou apresenta botão Continuar; então surgem as quatro alternativas A–D para apresentar o produto escolhido.
5. Pontuação da recomendação e qualidade da argumentação são independentes. A venda não é garantida, e o aluno não precisa obrigar o cliente a comprar todos os cinco itens.

**Financeiro:** MC% é referência histórica da planilha; massa de margem é uma **estimativa**, não a MM contábil oficial. Verificar disponibilidade, preços, porções, preferências e ingredientes para uso real.

## Pontuação das opções no pop-up

| Pontos | Avaliação | Interpretação |
|---:|---|---|
|10|Ideal|Maior adequação ao cenário e boa contribuição financeira quando possível.|
|7|Boa alternativa|Funciona, mas há ressalva de custo, quantidade ou preferência.|
|6|Aceitável com ressalvas|Tem utilidade, embora inferior ao ideal.|
|3|Fraca|Pode perder a oportunidade ou gerar desperdício.|
|0|Inadequada|Contraria necessidade ou restrição descrita na simulação.|

**Importante:** a nota/classificação não deve aparecer antes da escolha. Ela serve apenas para o algoritmo e para o feedback pós-seleção.

---
## Lucas

**Perfil:** Churrasco para seis pessoas, praticidade, sem desperdício. Está terminando uma tarefa.
**Restrições:** Não tem restrição alimentar declarada.

### Pop-up: Entrada

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616667 | ESPETINHO DE QUEIJO COALHO SWIFT 385G | 10 | ideal | 31.5% | R$ 2,564,855 |
| 616673 | PAO DE ALHO SWIFT 400G | 7 | boa alternativa | 22.5% | R$ 1,384,317 |
| 617992 | ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G | 6 | alternativa com ressalvas | 35.9% | R$ 1,996,455 |
| 616462 | BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G | 3 | pouco adequada | 24.8% | R$ 504,486 |
| 619057 | COXINHA DA ASA BUFFALO WINGS SWIFT 800G | 0 | inadequada | 15.2% | R$ 150,413 |

**Feedback imediato por escolha:**

- **10/10 · ESPETINHO DE QUEIJO COALHO SWIFT 385G:** É uma entrada própria para o churrasco, fácil de dividir e com MC% forte; vale combinar a quantidade para seis pessoas.
- **7/10 · PAO DE ALHO SWIFT 400G:** O pão de alho combina com churrasco e tem massa de margem estimada relevante. Pode ser repetição se o cliente já comprou pão.
- **6/10 · ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G:** Outra entrada de queijo adequada ao churrasco e com MC% elevado, mas é importante confirmar a preferência e o custo total.
- **3/10 · BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G:** É um aperitivo possível, porém menos integrado ao churrasco e que pode exigir preparo separado; não parte do que Lucas pediu.
- **0/10 · COXINHA DA ASA BUFFALO WINGS SWIFT 800G:** Uma porção de asas Buffalo ocupa espaço do prato principal e aumenta preparo e quantidade; contraria o desejo de evitar trabalho e sobras.

### Pop-up: Prato principal

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 618888 | FRALDINHA SEM GORDURA SWIFT LEGADO 1855 KG | 10 | ideal | 23.6% | R$ 1,697,988 |
| 623089 | CONTRA FILE SWIFT LEGADO 1855 KG | 7 | boa alternativa | 22.0% | R$ 1,057,389 |
| 617599 | FILEZINHO SASSAMI TEMPERADO SWIFT 1KG | 6 | alternativa com ressalvas | 21.0% | R$ 2,099,793 |
| 615385 | PICANHA SWIFT BLACK KG | 3 | pouco adequada | 21.5% | R$ 835,193 |
| 617496 | ISCAS DE FRANGO SWIFT 300G | 0 | inadequada | 18.7% | R$ 868,492 |

**Feedback imediato por escolha:**

- **10/10 · FRALDINHA SEM GORDURA SWIFT LEGADO 1855 KG:** A fraldinha atende ao churrasco com foco em qualidade, possui massa estimada relevante e permite discutir porção sem exageros.
- **7/10 · CONTRA FILE SWIFT LEGADO 1855 KG:** O contrafilé também funciona na churrasqueira, mas é preciso avaliar custo final e quantidade frente à fraldinha.
- **6/10 · FILEZINHO SASSAMI TEMPERADO SWIFT 1KG:** Sassami temperado é prático, mas Lucas procurava um corte que valorizasse o churrasco; pode ser uma segunda proteína, se houver interesse.
- **3/10 · PICANHA SWIFT BLACK KG:** A picanha Black pode encarecer a cesta. Sem saber o orçamento, priorizar o corte premium arrisca desperdício.
- **0/10 · ISCAS DE FRANGO SWIFT 300G:** Uma única embalagem de 300 g de iscas não é proposta adequada como prato principal de churrasco para seis.

### Pop-up: Acompanhamento

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616394 | FAROFA TRADICIONAL SWIFT 400G | 10 | ideal | 31.5% | R$ 1,028,518 |
| 619184 | BATATA RUSTICA PRE FRITA SWIFT 400G | 7 | boa alternativa | 42.5% | R$ 192,037 |
| 616472 | MANDIOCA SWIFT 600G | 6 | alternativa com ressalvas | 30.4% | R$ 354,458 |
| 621359 | BROCOLIS SWIFT 1,02KG | 3 | pouco adequada | 29.5% | R$ 842,840 |
| 617493 | FETTUCINE COM PEITO DE PERU E BROCOLIS SWIFT 350G | 0 | inadequada | 25.0% | R$ 521,931 |

**Feedback imediato por escolha:**

- **10/10 · FAROFA TRADICIONAL SWIFT 400G:** A farofa é complemento típico de churrasco, tem MC% e massa estimada favoráveis e precisa ser confirmada no cardápio.
- **7/10 · BATATA RUSTICA PRE FRITA SWIFT 400G:** Batata rústica é um acompanhamento diferente e com MC% elevada; pode exigir preparo adicional e atenção ao consumo.
- **6/10 · MANDIOCA SWIFT 600G:** Mandioca acompanha carnes, mas convém confirmar se Lucas já providenciou um acompanhamento semelhante.
- **3/10 · BROCOLIS SWIFT 1,02KG:** Brócolis de 1,02 kg pode exceder o consumo dos seis para um churrasco se ninguém pediu legumes.
- **0/10 · FETTUCINE COM PEITO DE PERU E BROCOLIS SWIFT 350G:** Um fettuccine pronto de 350 g não atende adequadamente como acompanhamento principal de um churrasco para seis.

### Pop-up: Bebida

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 622530 | COCA COLA GARRAFA 2L | 10 | ideal | 18.0% | R$ 136,406 |
| 622531 | COCA COLA ZERO GARRAFA 2L | 7 | boa alternativa | 18.7% | R$ 140,713 |
| 622971 | SUCO DE UVA NATURAL ONE 900 ML | 6 | alternativa com ressalvas | 20.2% | R$ 114,416 |
| 622532 | COCA COLA LATA 350ML | 3 | pouco adequada | 13.4% | R$ 30,699 |
| 623431 | SUCO MACA NATURAL ONE 180 ML | 0 | inadequada | 16.5% | R$ 11,869 |

**Feedback imediato por escolha:**

- **10/10 · COCA COLA GARRAFA 2L:** Refrigerante de 2 L atende a uma ocasião em grupo e tem massa de margem estimada relevante entre as bebidas; confirme quantas garrafas serão necessárias.
- **7/10 · COCA COLA ZERO GARRAFA 2L:** A opção zero pode agradar parte dos convidados, mas não se deve supor que todos prefiram essa versão.
- **6/10 · SUCO DE UVA NATURAL ONE 900 ML:** Suco de uva pode diversificar as bebidas, porém 900 ml é pouco para seis sem ajuste de quantidades.
- **3/10 · COCA COLA LATA 350ML:** Uma lata de 350 ml só cobre uma pessoa; pouco eficiente como bebida principal de uma reunião de seis.
- **0/10 · SUCO MACA NATURAL ONE 180 ML:** Uma caixinha de 180 ml não atende ao grupo como proposta única e não foi conectada às preferências dos convidados.

### Pop-up: Sobremesa

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616281 | PETIT GATEAU CHOCOLATE SWIFT 240G | 10 | ideal | 23.1% | R$ 412,821 |
| 623708 | PUDIM LEITE CONDENSADO SWIFT 550 G | 7 | boa alternativa | 23.9% | R$ 49,967 |
| 617247 | ACAI SWIFT 500G | 6 | alternativa com ressalvas | 37.4% | R$ 314,081 |
| 616283 | PUDIM DE LEITE  SWIFT 90G | 3 | pouco adequada | 29.8% | R$ 164,231 |
| 616444 | MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G | 0 | inadequada | 21.8% | R$ 119,235 |

**Feedback imediato por escolha:**

- **10/10 · PETIT GATEAU CHOCOLATE SWIFT 240G:** Petit gâteau cria fechamento especial para o encontro e tem boa massa estimada; planeje unidades suficientes para seis.
- **7/10 · PUDIM LEITE CONDENSADO SWIFT 550 G:** O pudim de 550 g é compartilhável e pode ser prático, mas é importante confirmar a preferência pela sobremesa.
- **6/10 · ACAI SWIFT 500G:** O açaí tem MC% elevada e pode ser servido em porções, mas exige pensar na logística e no consumo no churrasco.
- **3/10 · PUDIM DE LEITE  SWIFT 90G:** Uma unidade de pudim de 90 g pode ficar pequena para um grupo; seriam necessárias várias unidades.
- **0/10 · MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G:** Um único mousse de 80 g para seis não é uma sobremesa coerente sem dimensionar várias unidades.

### Estrutura de diálogos

As falas A–D abaixo são independentes do pop-up. O campo `{produto}` é substituído pelo nome do item efetivamente escolhido no pop-up. O cliente responde de acordo com a confiança e o resultado.

#### Abordagem inicial · `lucas_01_start`

**Antes de escolher:** O vendedor inicia.

- **10/10 — Oi, tudo bem? Vi que você está terminando uma tarefa. Posso conversar quando acabar?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **9/10 — Boa tarde! Você tem um minutinho ou prefere que eu volte depois?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **8/10 — Olá! Tudo certo? Posso te fazer uma pergunta rapidinho?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **7/10 — Oi! Sou do projeto EPAV. É um bom momento para conversar?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **6/10 — Boa tarde! Posso saber como costuma organizar as compras para o fim de semana?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **5/10 — Oi! Você parece ocupado. Prefere que eu passe em outro momento?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **9/10 — Posso falar com você em um momento mais tranquilo?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **1/10 — Tem que aproveitar agora porque a oferta pode acabar.**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: Você tentou acelerar o atendimento sem respeitar o momento da pessoa.

#### Descoberta · `lucas_02_discover`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Vai receber quantas pessoas?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **9/10 — O churrasco vai ser no almoço ou à noite?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **8/10 — O que costuma dar mais trabalho quando você prepara churrasco?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **7/10 — Você prefere deixar tudo adiantado ou preparar na hora?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **6/10 — Já tem alguma coisa comprada ou ainda vai organizar tudo?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **5/10 — Seis pessoas costumam comer bastante ou é um grupo mais tranquilo?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **9/10 — O que você mais valoriza ao fazer compras: tempo, quantidade ou preço?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **2/10 — Já posso montar o pedido completo para você?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: Você pressupôs uma necessidade sem descobrir se ela realmente existe.

#### Objeção contextual · `lucas_03_objection`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Entendi. Você já comprou alguma parte do churrasco?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **9/10 — Se o orçamento estiver apertado, faz sentido montar só o essencial. Qual é a prioridade?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Prefere olhar com calma e eu deixo a ideia organizada?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Se não for o momento de comprar, posso anotar o que faltaria e falamos depois.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **7/10 — Para evitar desperdício, podemos ajustar as quantidades. O que costuma sobrar?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **7/10 — O que te preocupa mais: gastar além do previsto ou comprar mais do que precisa?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **6/10 — Sei que é para seis pessoas. Posso confirmar as quantidades antes de fechar?**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **1/10 — Mas é churrasco, você precisa levar tudo isso.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.
- **0/10 — Aproveita agora, depois pode ser tarde.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.

#### Aprofundamento · `lucas_04_deepen`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você já definiu qual vai ser a carne principal?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **9/10 — Prefere algo já temperado ou você gosta de preparar tudo?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **8/10 — Qual é a parte do churrasco que costuma sobrar?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **7/10 — Além da carne, costuma servir entrada e acompanhamento?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **6/10 — Qual seria a quantidade ideal para não faltar e nem desperdiçar?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **5/10 — Alguém do grupo tem alguma restrição que eu deva considerar?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **9/10 — Posso confirmar uma coisa que você comentou antes de sugerir os produtos?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **0/10 — Não precisa me contar mais nada. Eu já sei o que indicar.**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: A fala desviou a atenção das prioridades declaradas pelo cliente.

#### Entrada · `lucas_05_entrada`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Entrada** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como entrada porque você comentou sobre o churrasco para seis pessoas sem desperdício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Prato principal · `lucas_06_principal`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Prato principal** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como prato principal porque você comentou sobre o churrasco para seis pessoas sem desperdício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Acompanhamento · `lucas_07_acompanhamento`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Acompanhamento** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como acompanhamento porque você comentou sobre o churrasco para seis pessoas sem desperdício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Bebida · `lucas_08_bebida`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Bebida** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como bebida porque você comentou sobre o churrasco para seis pessoas sem desperdício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Sobremesa · `lucas_09_sobremesa`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Sobremesa** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como sobremesa porque você comentou sobre o churrasco para seis pessoas sem desperdício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Encerramento · `lucas_10_closing`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Quer que eu confira o que falta na sua lista, sem compromisso?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **9/10 — Faz sentido fechar apenas o que realmente vai usar?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **8/10 — Prefere deixar essa sugestão anotada e decidir depois?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **7/10 — Gostaria que eu separasse as opções que combinam com as seis pessoas?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **6/10 — Qual parte você gostaria de ajustar antes de decidir?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **5/10 — Posso te explicar como ficaria o conjunto, e você escolhe se vale a pena?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **9/10 — Você pode decidir com calma. Quer que eu deixe a sugestão organizada?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **0/10 — Então está fechado, né? Vou contar como venda.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: Pressionar um fechamento pode prejudicar o relacionamento mesmo quando há interesse.

---
## Marina

**Perfil:** Mora sozinha, procura jantar prático e não consome carne bovina por preferência.
**Restrições:** Restrição escolhida para a simulação: não consome carne bovina por opção pessoal (não é alergia). Mora sozinha e evita desperdício. Conferir rótulos, ingredientes e contaminação cruzada caso haja outras restrições.

### Pop-up: Entrada

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616462 | BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G | 10 | ideal | 24.8% | R$ 504,486 |
| 617439 | PAO DE ALHO BOLINHA SWIFT 300G | 7 | boa alternativa | 32.4% | R$ 908,986 |
| 616667 | ESPETINHO DE QUEIJO COALHO SWIFT 385G | 6 | alternativa com ressalvas | 31.5% | R$ 2,564,855 |
| 617666 | COXINHA DE FRANGO COM MANDIOCA PRE-FRITA SWIFT 300G | 3 | pouco adequada | 24.7% | R$ 601,409 |
| 617687 | COXINHA DE COSTELA COM MANDIOCA CROCANTE SWIFT 300G | 0 | inadequada | 19.9% | R$ 350,397 |

**Feedback imediato por escolha:**

- **10/10 · BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G:** Bolinhas de queijo são um aperitivo sem carne bovina evidente no nome e a embalagem pode ser fracionada; conferir ingredientes e o modo de preparo.
- **7/10 · PAO DE ALHO BOLINHA SWIFT 300G:** Pão de alho de 300 g combina com uma refeição simples, mas vale confirmar se ela quer entrada além do jantar.
- **6/10 · ESPETINHO DE QUEIJO COALHO SWIFT 385G:** Queijo coalho tem boa MC%, mas 385 g podem ser demais para uma pessoa sem planejamento de outras refeições.
- **3/10 · COXINHA DE FRANGO COM MANDIOCA PRE-FRITA SWIFT 300G:** Coxinha de frango não contraria a escolha de evitar carne bovina, mas acrescenta um aperitivo frito a um jantar prático.
- **0/10 · COXINHA DE COSTELA COM MANDIOCA CROCANTE SWIFT 300G:** A coxinha de costela é bovina e desrespeita a preferência que Marina informou. Não recomende.

### Pop-up: Prato principal

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 617496 | ISCAS DE FRANGO SWIFT 300G | 10 | ideal | 18.7% | R$ 868,492 |
| 621692 | FILE DE TILAPIA SWIFT 400G | 7 | boa alternativa | 22.7% | R$ 1,227,659 |
| 618628 | HAMBURGUER DE SALMAO SWIFT 360G | 6 | alternativa com ressalvas | 18.1% | R$ 76,312 |
| 617599 | FILEZINHO SASSAMI TEMPERADO SWIFT 1KG | 3 | pouco adequada | 21.0% | R$ 2,099,793 |
| 615194 | HAMBURGUER BOVINO FRIBOI 672G | 0 | inadequada | 40.5% | R$ 1,471 |

**Feedback imediato por escolha:**

- **10/10 · ISCAS DE FRANGO SWIFT 300G:** Iscas de frango de 300 g se ajustam melhor ao jantar de uma pessoa e evitam carne bovina; boa massa estimada.
- **7/10 · FILE DE TILAPIA SWIFT 400G:** Filé de tilápia de 400 g é uma alternativa sem carne bovina, mas confirme se Marina gosta de peixe e sabe preparar.
- **6/10 · HAMBURGUER DE SALMAO SWIFT 360G:** Hambúrguer de salmão não envolve carne bovina no nome, mas é preciso confirmar preferência por peixe e porção.
- **3/10 · FILEZINHO SASSAMI TEMPERADO SWIFT 1KG:** Sassami de 1 kg pode atender várias refeições, mas para quem mora sozinha pode ser exagero sem planejamento de porções.
- **0/10 · HAMBURGUER BOVINO FRIBOI 672G:** Hambúrguer bovino contraria diretamente a preferência de Marina por não consumir carne bovina.

### Pop-up: Acompanhamento

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616507 | BROCOLIS SWIFT 300G | 10 | ideal | 36.6% | R$ 595,554 |
| 616500 | MISTURA DE 4 LEGUMES SWIFT 300G | 7 | boa alternativa | 35.6% | R$ 309,173 |
| 616472 | MANDIOCA SWIFT 600G | 6 | alternativa com ressalvas | 30.4% | R$ 354,458 |
| 621359 | BROCOLIS SWIFT 1,02KG | 3 | pouco adequada | 29.5% | R$ 842,840 |
| 623811 | PF COSTELA E MANDIOCA SWIFT 300 G | 0 | inadequada | 45.1% | R$ 401,084 |

**Feedback imediato por escolha:**

- **10/10 · BROCOLIS SWIFT 300G:** Brócolis de 300 g combina com um jantar simples, tem MC% relevante e evita excesso de volume para uma pessoa.
- **7/10 · MISTURA DE 4 LEGUMES SWIFT 300G:** O mix de legumes de 300 g é opção prática, mas é importante conferir quais legumes Marina gosta.
- **6/10 · MANDIOCA SWIFT 600G:** Mandioca combina com o prato, porém 600 g podem exigir dividir a embalagem em refeições.
- **3/10 · BROCOLIS SWIFT 1,02KG:** Brócolis em embalagem de 1,02 kg pode gerar armazenamento ou desperdício desnecessário para uma pessoa.
- **0/10 · PF COSTELA E MANDIOCA SWIFT 300 G:** O prato pronto de costela e mandioca contém carne bovina e ainda substitui a refeição em vez de complementá-la.

### Pop-up: Bebida

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 623431 | SUCO MACA NATURAL ONE 180 ML | 10 | ideal | 16.5% | R$ 11,869 |
| 623409 | SUCO LARANJA NATURAL ONE 180 ML | 7 | boa alternativa | 16.0% | R$ 15,207 |
| 622971 | SUCO DE UVA NATURAL ONE 900 ML | 6 | alternativa com ressalvas | 20.2% | R$ 114,416 |
| 622534 | COCA COLA 600ML | 3 | pouco adequada | 15.6% | R$ 39,634 |
| 622530 | COCA COLA GARRAFA 2L | 0 | inadequada | 18.0% | R$ 136,406 |

**Feedback imediato por escolha:**

- **10/10 · SUCO MACA NATURAL ONE 180 ML:** Suco individual de maçã de 180 ml evita sobra e encaixa no jantar de uma pessoa; não é um destaque de margem, mas respeita o perfil.
- **7/10 · SUCO LARANJA NATURAL ONE 180 ML:** Suco de laranja individual também controla porção, mas é preciso confirmar gosto e preferência.
- **6/10 · SUCO DE UVA NATURAL ONE 900 ML:** Suco de uva de 900 ml pode ser consumido em vários dias, desde que Marina queira essa quantidade.
- **3/10 · COCA COLA 600ML:** Refrigerante de 600 ml pode sobrar se ela só busca bebida individual para uma refeição.
- **0/10 · COCA COLA GARRAFA 2L:** Refrigerante de 2 L é desproporcional para um jantar individual, especialmente quando a cliente quer evitar desperdício.

### Pop-up: Sobremesa

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 617247 | ACAI SWIFT 500G | 10 | ideal | 37.4% | R$ 314,081 |
| 616283 | PUDIM DE LEITE  SWIFT 90G | 7 | boa alternativa | 29.8% | R$ 164,231 |
| 616444 | MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G | 6 | alternativa com ressalvas | 21.8% | R$ 119,235 |
| 623708 | PUDIM LEITE CONDENSADO SWIFT 550 G | 3 | pouco adequada | 23.9% | R$ 49,967 |
| 616281 | PETIT GATEAU CHOCOLATE SWIFT 240G | 0 | inadequada | 23.1% | R$ 412,821 |

**Feedback imediato por escolha:**

- **10/10 · ACAI SWIFT 500G:** Açaí de 500 g tem MC% alta e pode ser fracionado; orientar armazenamento e confirmar se Marina consome açaí.
- **7/10 · PUDIM DE LEITE  SWIFT 90G:** Pudim de 90 g é uma opção individual excelente em porção, mas com massa de margem estimada menor que o destaque da cesta.
- **6/10 · MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G:** Mousse de chocolate individual é prático; conferir preferência de sabor e se sobremesa faz sentido hoje.
- **3/10 · PUDIM LEITE CONDENSADO SWIFT 550 G:** Pudim de 550 g tem potencial de sobra para quem mora sozinha e quer controlar desperdício.
- **0/10 · PETIT GATEAU CHOCOLATE SWIFT 240G:** Petit gâteau de 240 g exige uma ocasião/preparo que não apareceu na conversa sobre um jantar individual rápido.

### Estrutura de diálogos

As falas A–D abaixo são independentes do pop-up. O campo `{produto}` é substituído pelo nome do item efetivamente escolhido no pop-up. O cliente responde de acordo com a confiança e o resultado.

#### Abordagem inicial · `marina_01_start`

**Antes de escolher:** O vendedor inicia.

- **10/10 — Oi! Vi que estava no telefone. Já é um bom momento para conversar?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **9/10 — Boa tarde! Posso te perguntar como você costuma resolver o jantar quando chega em casa?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **8/10 — Oi, tudo bem? Sou do EPAV. Você teria um minutinho?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **7/10 — Olá! Posso conversar agora ou atrapalho?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **6/10 — Boa tarde! Você costuma preferir cozinhar ou deixar algo pronto para a noite?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **5/10 — Oi! Se estiver livre, posso te mostrar como funciona nosso atendimento?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **9/10 — Posso falar com você em um momento mais tranquilo?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **1/10 — Tem que aproveitar agora porque a oferta pode acabar.**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: Você tentou acelerar o atendimento sem respeitar o momento da pessoa.

#### Descoberta · `marina_02_discover`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — O jantar é só para você?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **9/10 — Prefere algo que fique pronto em poucos minutos?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **8/10 — Você costuma cozinhar todos os dias ou deixar porções separadas?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **7/10 — Tem algum ingrediente ou tipo de carne que você evita?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **6/10 — Você tem pouco espaço para guardar congelados?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **5/10 — Prefere montar uma refeição simples ou algo especial hoje?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **9/10 — O que você mais valoriza ao fazer compras: tempo, quantidade ou preço?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **2/10 — Já posso montar o pedido completo para você?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: Você pressupôs uma necessidade sem descobrir se ela realmente existe.

#### Aprofundamento · `marina_03_deepen`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você evita carne bovina por preferência ou tem alguma alergia/intolerância que exija conferir o rótulo?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **9/10 — Qual é o tempo máximo que gostaria de gastar preparando o jantar?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **8/10 — Você tem espaço para armazenar uma porção que sobrar?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **7/10 — Gosta de incluir vegetais junto com o prato principal?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **6/10 — Além da refeição, uma bebida individual faria sentido?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **5/10 — Antes de sugerir, posso confirmar exatamente o que você não pode consumir?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **9/10 — Posso confirmar uma coisa que você comentou antes de sugerir os produtos?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **0/10 — Não precisa me contar mais nada. Eu já sei o que indicar.**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: A fala desviou a atenção das prioridades declaradas pelo cliente.

#### Entrada · `marina_04_entrada`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Entrada** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como entrada porque você comentou sobre o jantar individual e a preferência de não consumir carne bovina. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Prato principal · `marina_05_principal`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Prato principal** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como prato principal porque você comentou sobre o jantar individual e a preferência de não consumir carne bovina. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Acompanhamento · `marina_06_acompanhamento`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Acompanhamento** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como acompanhamento porque você comentou sobre o jantar individual e a preferência de não consumir carne bovina. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Bebida · `marina_07_bebida`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Bebida** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como bebida porque você comentou sobre o jantar individual e a preferência de não consumir carne bovina. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Sobremesa · `marina_08_sobremesa`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Sobremesa** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como sobremesa porque você comentou sobre o jantar individual e a preferência de não consumir carne bovina. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Objeção contextual · `marina_09_objection`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você tem razão. Primeiro vamos conferir o rótulo, sem adivinhar os ingredientes.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **9/10 — Se a quantidade for demais, prefere deixar essa opção de fora?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Quer que eu separe só as opções que possam se encaixar na sua restrição?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — A ideia é que nenhuma escolha te obrigue a desperdiçar. Qual embalagem faz sentido?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **7/10 — Posso rever a indicação antes de falar em valores?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **7/10 — Para você, o ponto principal é praticidade, ingrediente ou porção?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **1/10 — Pode confiar, todo produto Swift serve para sua restrição.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.
- **0/10 — Leva assim mesmo. Depois você olha a composição.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.

#### Encerramento · `marina_10_closing`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Antes de qualquer pedido, confirmamos o rótulo e deixamos de fora o que não servir, tudo bem?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **9/10 — Qual desses itens faria mais diferença no seu jantar?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **8/10 — Você prefere levar apenas o que vai usar agora?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **7/10 — Quer rever as quantidades para evitar desperdício?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **6/10 — Faz sentido deixar alguma coisa para uma próxima compra?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **5/10 — Podemos encerrar sem pedido se não houver segurança na composição?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **9/10 — Você pode decidir com calma. Quer que eu deixe a sugestão organizada?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **0/10 — Então está fechado, né? Vou contar como venda.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: Pressionar um fechamento pode prejudicar o relacionamento mesmo quando há interesse.

---
## Rafael

**Perfil:** Compra carne para a semana, compara preços e já compra em outra loja. Está comparando opções.
**Restrições:** Não tem restrição alimentar declarada.

### Pop-up: Entrada

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616667 | ESPETINHO DE QUEIJO COALHO SWIFT 385G | 10 | ideal | 31.5% | R$ 2,564,855 |
| 616673 | PAO DE ALHO SWIFT 400G | 7 | boa alternativa | 22.5% | R$ 1,384,317 |
| 617992 | ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G | 6 | alternativa com ressalvas | 35.9% | R$ 1,996,455 |
| 616462 | BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G | 3 | pouco adequada | 24.8% | R$ 504,486 |
| 619057 | COXINHA DA ASA BUFFALO WINGS SWIFT 800G | 0 | inadequada | 15.2% | R$ 150,413 |

**Feedback imediato por escolha:**

- **10/10 · ESPETINHO DE QUEIJO COALHO SWIFT 385G:** Queijo coalho é complemento opcional para diversificar a semana; tem MC% e massa relevantes, mas o cliente deve aceitar o custo adicional.
- **7/10 · PAO DE ALHO SWIFT 400G:** Pão de alho combina com refeições e possui massa relevante, mas pode não ser prioridade de quem está comparando gastos.
- **6/10 · ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G:** Outra opção de queijo com margem elevada, porém o benefício para a rotina ainda precisa ser demonstrado.
- **3/10 · BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G:** Bolinhas de queijo são extras, menos ligados às refeições comuns da semana e pouco interessantes para comparação de custos.
- **0/10 · COXINHA DA ASA BUFFALO WINGS SWIFT 800G:** Asas Buffalo de 800 g funcionam mais como proteína/lanche; oferecê-las como entrada sem verificar interesse pode aumentar o gasto.

### Pop-up: Prato principal

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 617599 | FILEZINHO SASSAMI TEMPERADO SWIFT 1KG | 10 | ideal | 21.0% | R$ 2,099,793 |
| 616902 | FILE DE PEITO EM TIRAS SWIFT 1KG | 7 | boa alternativa | 23.1% | R$ 1,716,853 |
| 621692 | FILE DE TILAPIA SWIFT 400G | 6 | alternativa com ressalvas | 22.7% | R$ 1,227,659 |
| 617979 | FILEZINHO SASSAMI EMPANADO SWIFT 700G | 3 | pouco adequada | 26.8% | R$ 1,245,590 |
| 615385 | PICANHA SWIFT BLACK KG | 0 | inadequada | 21.5% | R$ 835,193 |

**Feedback imediato por escolha:**

- **10/10 · FILEZINHO SASSAMI TEMPERADO SWIFT 1KG:** Sassami temperado 1 kg serve a refeições da semana e tem massa estimada expressiva; permite explicar praticidade sem prometer economia.
- **7/10 · FILE DE PEITO EM TIRAS SWIFT 1KG:** Filé de peito em tiras 1 kg é versátil e tem boa massa estimada, mas o aluno deve comparar preparo, preço e rendimento.
- **6/10 · FILE DE TILAPIA SWIFT 400G:** Tilápia de 400 g traz variedade, mas o volume para toda a semana depende de outras compras e da preferência por peixe.
- **3/10 · FILEZINHO SASSAMI EMPANADO SWIFT 700G:** Sassami empanado tem margem forte, mas não resolve tão bem a busca de Rafael por versatilidade no cardápio da semana.
- **0/10 · PICANHA SWIFT BLACK KG:** Picanha premium por quilo como principal proposta não respeita a atenção do cliente ao orçamento e ao custo-benefício.

### Pop-up: Acompanhamento

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616472 | MANDIOCA SWIFT 600G | 10 | ideal | 30.4% | R$ 354,458 |
| 616507 | BROCOLIS SWIFT 300G | 7 | boa alternativa | 36.6% | R$ 595,554 |
| 616394 | FAROFA TRADICIONAL SWIFT 400G | 6 | alternativa com ressalvas | 31.5% | R$ 1,028,518 |
| 619184 | BATATA RUSTICA PRE FRITA SWIFT 400G | 3 | pouco adequada | 42.5% | R$ 192,037 |
| 623811 | PF COSTELA E MANDIOCA SWIFT 300 G | 0 | inadequada | 45.1% | R$ 401,084 |

**Feedback imediato por escolha:**

- **10/10 · MANDIOCA SWIFT 600G:** Mandioca de 600 g compõe refeições da semana com boa MC%, sem exigir grande pacote.
- **7/10 · BROCOLIS SWIFT 300G:** Brócolis de 300 g oferece variedade e possui MC% superior, mas confirme aceitação de legumes.
- **6/10 · FAROFA TRADICIONAL SWIFT 400G:** Farofa tem massa estimada alta, mas pode ser menos versátil que mandioca para diferentes almoços.
- **3/10 · BATATA RUSTICA PRE FRITA SWIFT 400G:** Batata rústica pré-frita tem ótima MC%, mas exige verificar se essa praticidade vale o custo na rotina do cliente.
- **0/10 · PF COSTELA E MANDIOCA SWIFT 300 G:** Um prato pronto de costela substitui o almoço completo: não faz sentido vendê-lo como acompanhamento do sassami.

### Pop-up: Bebida

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 622971 | SUCO DE UVA NATURAL ONE 900 ML | 10 | ideal | 20.2% | R$ 114,416 |
| 622956 | SUCO DE LARANJA NATURAL ONE 900 ML | 7 | boa alternativa | 17.4% | R$ 125,554 |
| 622531 | COCA COLA ZERO GARRAFA 2L | 6 | alternativa com ressalvas | 18.7% | R$ 140,713 |
| 623431 | SUCO MACA NATURAL ONE 180 ML | 3 | pouco adequada | 16.5% | R$ 11,869 |
| 623307 | COCA COLA  GARRAFA KS 250 ML | 0 | inadequada | 10.3% | R$ 8,669 |

**Feedback imediato por escolha:**

- **10/10 · SUCO DE UVA NATURAL ONE 900 ML:** Suco de uva de 900 ml pode acompanhar várias refeições e tem uma das melhores MC% entre as bebidas disponíveis.
- **7/10 · SUCO DE LARANJA NATURAL ONE 900 ML:** Suco de laranja de 900 ml também é familiar, mas depende do paladar e da comparação de preço.
- **6/10 · COCA COLA ZERO GARRAFA 2L:** Refrigerante zero de 2 L pode ser útil para a semana, mas não deve ser sugerido sem descobrir o hábito de consumo.
- **3/10 · SUCO MACA NATURAL ONE 180 ML:** Uma caixinha de 180 ml atende uma ocasião apenas; pouco conectada à ideia de organizar bebidas da semana.
- **0/10 · COCA COLA  GARRAFA KS 250 ML:** Uma garrafinha de 250 ml não resolve a necessidade de Rafael para várias refeições e agrega pouco à proposta.

### Pop-up: Sobremesa

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616444 | MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G | 10 | ideal | 21.8% | R$ 119,235 |
| 616283 | PUDIM DE LEITE  SWIFT 90G | 7 | boa alternativa | 29.8% | R$ 164,231 |
| 617247 | ACAI SWIFT 500G | 6 | alternativa com ressalvas | 37.4% | R$ 314,081 |
| 623708 | PUDIM LEITE CONDENSADO SWIFT 550 G | 3 | pouco adequada | 23.9% | R$ 49,967 |
| 616281 | PETIT GATEAU CHOCOLATE SWIFT 240G | 0 | inadequada | 23.1% | R$ 412,821 |

**Feedback imediato por escolha:**

- **10/10 · MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G:** Mousse individual tem dose controlada e acrescenta variedade sem ampliar demais a cesta de um cliente atento ao custo.
- **7/10 · PUDIM DE LEITE  SWIFT 90G:** Pudim individual é outra opção simples; a escolha depende de gosto e comparação de custo.
- **6/10 · ACAI SWIFT 500G:** Açaí possui boa MC%, mas a embalagem de 500 g ocupa mais espaço e exige avaliar consumo real.
- **3/10 · PUDIM LEITE CONDENSADO SWIFT 550 G:** Pudim de 550 g cria volume que Rafael não indicou precisar na compra da semana.
- **0/10 · PETIT GATEAU CHOCOLATE SWIFT 240G:** Petit gâteau de 240 g é uma sobremesa mais elaborada, pouco conectada à preocupação com custo-benefício da compra rotineira.

### Estrutura de diálogos

As falas A–D abaixo são independentes do pop-up. O campo `{produto}` é substituído pelo nome do item efetivamente escolhido no pop-up. O cliente responde de acordo com a confiança e o resultado.

#### Abordagem inicial · `rafael_01_start`

**Antes de escolher:** O vendedor inicia.

- **10/10 — Boa tarde! Vi que estava comparando preços. Posso entender o que costuma levar?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **9/10 — Oi! Você costuma comprar carne para a semana toda?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **8/10 — Olá! Tem um minutinho para eu conhecer sua rotina de compras?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **7/10 — Boa tarde! Se não estiver atrapalhando, posso te fazer uma pergunta?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **6/10 — Oi! Você costuma decidir mais pelo preço ou pela praticidade?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **5/10 — Olá! Sou do EPAV, posso te explicar uma opção sem compromisso?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **9/10 — Posso falar com você em um momento mais tranquilo?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **1/10 — Tem que aproveitar agora porque a oferta pode acabar.**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: Você tentou acelerar o atendimento sem respeitar o momento da pessoa.

#### Objeção contextual · `rafael_02_objection`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você está certo em comparar. Quer olhar o preço por quantidade quando os valores estiverem disponíveis?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **9/10 — Sem prometer que é o mais barato, posso mostrar o que facilita sua rotina?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Qual item precisaria justificar melhor o valor para você?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Se a comparação não favorecer a compra, não tem problema.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **7/10 — Podemos comparar rendimento e desperdício, além do preço?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **7/10 — Talvez não valha mudar tudo. Quer avaliar só um item como teste?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **1/10 — Na Swift é sempre mais barato, nem precisa conferir.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.
- **0/10 — Sua loja atual não é tão boa, deveria trocar.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.

#### Descoberta · `rafael_03_discover`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — O que você costuma comprar primeiro quando faz a compra da semana?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **9/10 — Além do preço, o que mais pesa na hora da escolha?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **8/10 — Quanto tempo você gasta fazendo essas compras?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **7/10 — Você costuma comprar tudo em um lugar só ou passa por várias lojas?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **6/10 — Quando compara, considera tamanho da embalagem e desperdício?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **5/10 — Você compra para quantas pessoas normalmente?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **9/10 — O que você mais valoriza ao fazer compras: tempo, quantidade ou preço?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **2/10 — Já posso montar o pedido completo para você?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: Você pressupôs uma necessidade sem descobrir se ela realmente existe.

#### Aprofundamento · `rafael_04_deepen`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você faz a comparação pelo peso ou pelo preço final?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **9/10 — O tempo de deslocamento entra na sua conta?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **8/10 — Você prefere cortes prontos ou preparar do zero?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **7/10 — Tem algum item que sempre acaba faltando no meio da semana?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **6/10 — Já comparou quantidade, rendimento e praticidade juntos?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **5/10 — Vale mais conhecer opções ou ver como ficaria sua lista completa?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **9/10 — Posso confirmar uma coisa que você comentou antes de sugerir os produtos?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **0/10 — Não precisa me contar mais nada. Eu já sei o que indicar.**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: A fala desviou a atenção das prioridades declaradas pelo cliente.

#### Entrada · `rafael_05_entrada`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Entrada** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como entrada porque você comentou sobre as refeições da semana e a comparação de custo-benefício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Prato principal · `rafael_06_principal`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Prato principal** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como prato principal porque você comentou sobre as refeições da semana e a comparação de custo-benefício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Acompanhamento · `rafael_07_acompanhamento`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Acompanhamento** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como acompanhamento porque você comentou sobre as refeições da semana e a comparação de custo-benefício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Bebida · `rafael_08_bebida`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Bebida** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como bebida porque você comentou sobre as refeições da semana e a comparação de custo-benefício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Sobremesa · `rafael_09_sobremesa`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Sobremesa** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como sobremesa porque você comentou sobre as refeições da semana e a comparação de custo-benefício. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Encerramento · `rafael_10_closing`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Quer guardar essa comparação e decidir o que vale para sua rotina?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **9/10 — Faz sentido testar só o item que te interessou?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **8/10 — Posso deixar claro o que é benefício e o que ainda precisa ser comparado?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **7/10 — Você prefere não comprar hoje e revisar os preços depois?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **6/10 — Qual produto teve melhor relação entre utilidade e quantidade para você?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **5/10 — Se não fizer sentido financeiramente, tudo bem encerrar por aqui.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **9/10 — Você pode decidir com calma. Quer que eu deixe a sugestão organizada?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **0/10 — Então está fechado, né? Vou contar como venda.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: Pressionar um fechamento pode prejudicar o relacionamento mesmo quando há interesse.

---
## Camila

**Perfil:** Entre duas reuniões; quer praticidade, pouco desperdício e controle de gastos; nesta simulação evita frituras e empanados por preferência.
**Restrições:** Restrição definida para simulação: não quer alimentos fritos nem empanados por preferência pessoal, não por alergia. Prefere preparos grelhados, assados ou cozidos; confira rótulo e método de preparo.

### Pop-up: Entrada

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 617439 | PAO DE ALHO BOLINHA SWIFT 300G | 10 | ideal | 32.4% | R$ 908,986 |
| 616673 | PAO DE ALHO SWIFT 400G | 7 | boa alternativa | 22.5% | R$ 1,384,317 |
| 616667 | ESPETINHO DE QUEIJO COALHO SWIFT 385G | 6 | alternativa com ressalvas | 31.5% | R$ 2,564,855 |
| 617992 | ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G | 3 | pouco adequada | 35.9% | R$ 1,996,455 |
| 617666 | COXINHA DE FRANGO COM MANDIOCA PRE-FRITA SWIFT 300G | 0 | inadequada | 24.7% | R$ 601,409 |

**Feedback imediato por escolha:**

- **10/10 · PAO DE ALHO BOLINHA SWIFT 300G:** Pão de alho bolinha de 300 g pode ser preparado assado, é simples e possui boa MC%; confirmar o preparo.
- **7/10 · PAO DE ALHO SWIFT 400G:** Pão de alho de 400 g também permite preparo assado, mas pode exceder o necessário dependendo da rotina.
- **6/10 · ESPETINHO DE QUEIJO COALHO SWIFT 385G:** Queijo coalho pode ser grelhado, mas custa mais tempo de preparo e uma porção de 385 g precisa fazer sentido.
- **3/10 · ESPETINHO DE QUEIJO MUSSARELA BOLINHA DEFUMADO SWIFT 310G:** Bolinhas de muçarela no espeto podem ser grelhadas, mas são menos práticas para uma cliente entre reuniões.
- **0/10 · COXINHA DE FRANGO COM MANDIOCA PRE-FRITA SWIFT 300G:** Coxinha pré-frita contraria a preferência simulada de Camila de evitar itens fritos/empanados; não deve ser prioridade.

### Pop-up: Prato principal

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 621692 | FILE DE TILAPIA SWIFT 400G | 10 | ideal | 22.7% | R$ 1,227,659 |
| 617496 | ISCAS DE FRANGO SWIFT 300G | 7 | boa alternativa | 18.7% | R$ 868,492 |
| 618344 | HAMBURGUER SWIFT GRAN RESERVA 400G | 6 | alternativa com ressalvas | 20.0% | R$ 318,656 |
| 617599 | FILEZINHO SASSAMI TEMPERADO SWIFT 1KG | 3 | pouco adequada | 21.0% | R$ 2,099,793 |
| 617979 | FILEZINHO SASSAMI EMPANADO SWIFT 700G | 0 | inadequada | 26.8% | R$ 1,245,590 |

**Feedback imediato por escolha:**

- **10/10 · FILE DE TILAPIA SWIFT 400G:** Tilápia de 400 g admite preparo grelhado ou assado e atende a rotina rápida sem recorrer a frituras.
- **7/10 · ISCAS DE FRANGO SWIFT 300G:** Iscas de frango de 300 g podem ser grelhadas, mas confirme tempo de preparo e aceitação da cliente.
- **6/10 · HAMBURGUER SWIFT GRAN RESERVA 400G:** Hambúrguer Gran Reserva pode ser grelhado, mas vale avaliar custo e se atende à rotina dela.
- **3/10 · FILEZINHO SASSAMI TEMPERADO SWIFT 1KG:** Sassami temperado de 1 kg ocupa mais espaço e exige planejar porções para não desperdiçar.
- **0/10 · FILEZINHO SASSAMI EMPANADO SWIFT 700G:** Sassami empanado não atende à preferência simulada de Camila de evitar produtos empanados.

### Pop-up: Acompanhamento

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616500 | MISTURA DE 4 LEGUMES SWIFT 300G | 10 | ideal | 35.6% | R$ 309,173 |
| 616507 | BROCOLIS SWIFT 300G | 7 | boa alternativa | 36.6% | R$ 595,554 |
| 616472 | MANDIOCA SWIFT 600G | 6 | alternativa com ressalvas | 30.4% | R$ 354,458 |
| 621359 | BROCOLIS SWIFT 1,02KG | 3 | pouco adequada | 29.5% | R$ 842,840 |
| 619184 | BATATA RUSTICA PRE FRITA SWIFT 400G | 0 | inadequada | 42.5% | R$ 192,037 |

**Feedback imediato por escolha:**

- **10/10 · MISTURA DE 4 LEGUMES SWIFT 300G:** Mistura de quatro legumes de 300 g tem boa MC% e atende a busca por porção pequena e preparo rápido.
- **7/10 · BROCOLIS SWIFT 300G:** Brócolis 300 g também é prático e com alta MC%; depende do gosto da cliente.
- **6/10 · MANDIOCA SWIFT 600G:** Mandioca pode ser cozida sem fritura, mas demanda conferir o tempo de preparo.
- **3/10 · BROCOLIS SWIFT 1,02KG:** Pacote de brócolis de 1,02 kg pode aumentar armazenamento e desperdício para Camila.
- **0/10 · BATATA RUSTICA PRE FRITA SWIFT 400G:** Batata rústica pré-frita não é a escolha mais alinhada à preferência de evitar itens pré-fritos.

### Pop-up: Bebida

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 623242 | AGUA SEM GAS CRYSTAL 1 L | 10 | ideal | 18.5% | R$ 8,371 |
| 623431 | SUCO MACA NATURAL ONE 180 ML | 7 | boa alternativa | 16.5% | R$ 11,869 |
| 623409 | SUCO LARANJA NATURAL ONE 180 ML | 6 | alternativa com ressalvas | 16.0% | R$ 15,207 |
| 622534 | COCA COLA 600ML | 3 | pouco adequada | 15.6% | R$ 39,634 |
| 622530 | COCA COLA GARRAFA 2L | 0 | inadequada | 18.0% | R$ 136,406 |

**Feedback imediato por escolha:**

- **10/10 · AGUA SEM GAS CRYSTAL 1 L:** Água sem gás de 1 L é simples e não adiciona gasto com bebida especial; prioriza adequação à rotina.
- **7/10 · SUCO MACA NATURAL ONE 180 ML:** Suco individual de maçã pode complementar, mas acrescenta um custo que talvez não seja prioridade.
- **6/10 · SUCO LARANJA NATURAL ONE 180 ML:** Suco individual de laranja evita desperdício, se estiver dentro da preferência e orçamento.
- **3/10 · COCA COLA 600ML:** Refrigerante de 600 ml é uma compra complementar pouco ligada à rotina descrita; precisa ser confirmada.
- **0/10 · COCA COLA GARRAFA 2L:** Garrafa de 2 L para consumo individual não respeita bem as metas de reduzir gasto e desperdício.

### Pop-up: Sobremesa

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616283 | PUDIM DE LEITE  SWIFT 90G | 10 | ideal | 29.8% | R$ 164,231 |
| 622684 | MOUSSE DE LIMAO SWIFT 80G | 7 | boa alternativa | 28.3% | R$ 65,340 |
| 616444 | MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G | 6 | alternativa com ressalvas | 21.8% | R$ 119,235 |
| 617247 | ACAI SWIFT 500G | 3 | pouco adequada | 37.4% | R$ 314,081 |
| 623708 | PUDIM LEITE CONDENSADO SWIFT 550 G | 0 | inadequada | 23.9% | R$ 49,967 |

**Feedback imediato por escolha:**

- **10/10 · PUDIM DE LEITE  SWIFT 90G:** Pudim individual de 90 g é prático e tem boa MC%, sem exigir comprar um pote maior.
- **7/10 · MOUSSE DE LIMAO SWIFT 80G:** Mousse de limão de 80 g é conveniente, mas convém perguntar o sabor preferido.
- **6/10 · MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G:** Mousse de chocolate de 80 g também controla porção, com MC% menor; confirmar preferência.
- **3/10 · ACAI SWIFT 500G:** Açaí de 500 g ocupa espaço e precisa de consumo planejado; Camila tem pouco tempo e quer evitar sobra.
- **0/10 · PUDIM LEITE CONDENSADO SWIFT 550 G:** Pudim de 550 g para consumo individual é desproporcional à necessidade e ao controle de desperdício.

### Estrutura de diálogos

As falas A–D abaixo são independentes do pop-up. O campo `{produto}` é substituído pelo nome do item efetivamente escolhido no pop-up. O cliente responde de acordo com a confiança e o resultado.

#### Abordagem inicial · `camila_01_start`

**Antes de escolher:** O vendedor inicia.

- **10/10 — Boa tarde! Vi que acabou a reunião. Você tem um minuto?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **9/10 — Oi, tudo bem? Agora é um bom momento ou prefere depois?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **8/10 — Olá! Posso te fazer uma pergunta rápida sobre sua rotina de refeições?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **7/10 — Boa tarde! Sou do EPAV. Posso ser breve?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **6/10 — Oi! Você está indo para outra reunião?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **5/10 — Olá! Tem um minuto para eu entender o que facilita sua rotina?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **9/10 — Posso falar com você em um momento mais tranquilo?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **1/10 — Tem que aproveitar agora porque a oferta pode acabar.**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: Você tentou acelerar o atendimento sem respeitar o momento da pessoa.

#### Descoberta · `camila_02_discover`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — No seu dia a dia, qual refeição costuma ser mais corrida?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **9/10 — Qual é a maior dificuldade: tempo, gasto ou desperdício?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **8/10 — Você costuma preparar comida para quantas pessoas?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **7/10 — Tem algo que evita comer e que eu precise considerar?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **6/10 — Quando chega em casa, prefere aquecer algo ou preparar rapidamente?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **5/10 — Você tem espaço para guardar porções?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **9/10 — O que você mais valoriza ao fazer compras: tempo, quantidade ou preço?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **2/10 — Já posso montar o pedido completo para você?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: Você pressupôs uma necessidade sem descobrir se ela realmente existe.

#### Objeção contextual · `camila_03_objection`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Tudo bem. Posso resumir a ideia em dez segundos e você decide se quer continuar?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **9/10 — Se seu tempo acabou, marcamos outro momento sem insistir.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — A prioridade é gastar menos ou cozinhar menos?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Podemos rever a cesta para evitar produtos que não serão usados.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **7/10 — Antes de fechar, quer conferir se o preparo é adequado às suas restrições?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **7/10 — Se o orçamento não permitir hoje, podemos deixar apenas a sugestão anotada.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **1/10 — Mas você precisa decidir agora, porque eu já montei tudo.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.
- **0/10 — É rapidinho, só preciso de mais cinco minutos.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.

#### Aprofundamento · `camila_04_deepen`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Sua restrição é evitar fritura ou existe algum ingrediente que precisa ficar de fora?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **9/10 — Quer uma combinação com o mínimo de preparo?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **8/10 — Há limite de quantidade para não sobrar comida?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **7/10 — Você prefere fazer tudo de uma vez ou preparar porções pequenas?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **6/10 — Se não couber no orçamento, qual etapa do cardápio seria menos importante?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **5/10 — Posso resumir em uma frase o que você precisa antes de sugerir?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **9/10 — Posso confirmar uma coisa que você comentou antes de sugerir os produtos?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **0/10 — Não precisa me contar mais nada. Eu já sei o que indicar.**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: A fala desviou a atenção das prioridades declaradas pelo cliente.

#### Entrada · `camila_05_entrada`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Entrada** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como entrada porque você comentou sobre a rotina corrida, o orçamento e a preferência por evitar frituras e empanados. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Prato principal · `camila_06_principal`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Prato principal** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como prato principal porque você comentou sobre a rotina corrida, o orçamento e a preferência por evitar frituras e empanados. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Acompanhamento · `camila_07_acompanhamento`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Acompanhamento** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como acompanhamento porque você comentou sobre a rotina corrida, o orçamento e a preferência por evitar frituras e empanados. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Bebida · `camila_08_bebida`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Bebida** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como bebida porque você comentou sobre a rotina corrida, o orçamento e a preferência por evitar frituras e empanados. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Sobremesa · `camila_09_sobremesa`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Sobremesa** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como sobremesa porque você comentou sobre a rotina corrida, o orçamento e a preferência por evitar frituras e empanados. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Encerramento · `camila_10_closing`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Quer que eu deixe uma versão resumida e te procure quando estiver disponível?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **9/10 — Faz sentido manter só os itens que você usaria?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **8/10 — Antes de decidir, quer conferir quantidade e composição?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **7/10 — Se não for o momento, combinamos de conversar quando você puder.**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **6/10 — Posso encerrar por agora para não atrapalhar sua reunião?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **5/10 — Qual parte da sugestão você gostaria de manter para avaliar depois?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **9/10 — Você pode decidir com calma. Quer que eu deixe a sugestão organizada?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **0/10 — Então está fechado, né? Vou contar como venda.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: Pressionar um fechamento pode prejudicar o relacionamento mesmo quando há interesse.

---
## André

**Perfil:** Compra para quatro pessoas, tem poucos minutos e precisa controlar o orçamento.
**Restrições:** Não tem restrição alimentar declarada.

### Pop-up: Entrada

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616673 | PAO DE ALHO SWIFT 400G | 10 | ideal | 22.5% | R$ 1,384,317 |
| 617439 | PAO DE ALHO BOLINHA SWIFT 300G | 7 | boa alternativa | 32.4% | R$ 908,986 |
| 616667 | ESPETINHO DE QUEIJO COALHO SWIFT 385G | 6 | alternativa com ressalvas | 31.5% | R$ 2,564,855 |
| 616462 | BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G | 3 | pouco adequada | 24.8% | R$ 504,486 |
| 623800 | PAO ALHO BOLINHA TRAD MATURATTA 150 G | 0 | inadequada | 33.9% | R$ 803 |

**Feedback imediato por escolha:**

- **10/10 · PAO DE ALHO SWIFT 400G:** Pão de alho de 400 g pode ser dividido entre quatro pessoas e possui massa estimada de margem relevante.
- **7/10 · PAO DE ALHO BOLINHA SWIFT 300G:** Pão de alho bolinha também funciona, com MC% alta; confirme se 300 g atendem os quatro.
- **6/10 · ESPETINHO DE QUEIJO COALHO SWIFT 385G:** Queijo coalho agrega variedade e tem alta contribuição, mas pode elevar o gasto para uma família com orçamento limitado.
- **3/10 · BOLINHAS DE QUEIJO PRE FRITA SWIFT 300G:** Bolinhas de queijo de 300 g talvez não rendam como entrada para quatro e acrescentam preparo.
- **0/10 · PAO ALHO BOLINHA TRAD MATURATTA 150 G:** Pacote de pão de alho de 150 g é insuficiente como entrada compartilhada por quatro sem multiplicar unidades.

### Pop-up: Prato principal

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 617979 | FILEZINHO SASSAMI EMPANADO SWIFT 700G | 10 | ideal | 26.8% | R$ 1,245,590 |
| 617599 | FILEZINHO SASSAMI TEMPERADO SWIFT 1KG | 7 | boa alternativa | 21.0% | R$ 2,099,793 |
| 618344 | HAMBURGUER SWIFT GRAN RESERVA 400G | 6 | alternativa com ressalvas | 20.0% | R$ 318,656 |
| 621692 | FILE DE TILAPIA SWIFT 400G | 3 | pouco adequada | 22.7% | R$ 1,227,659 |
| 615385 | PICANHA SWIFT BLACK KG | 0 | inadequada | 21.5% | R$ 835,193 |

**Feedback imediato por escolha:**

- **10/10 · FILEZINHO SASSAMI EMPANADO SWIFT 700G:** Sassami empanado de 700 g combina com refeição familiar prática e tem boa MC% e massa estimada; conferir porção para quatro.
- **7/10 · FILEZINHO SASSAMI TEMPERADO SWIFT 1KG:** Sassami temperado de 1 kg pode servir a família e tem massa estimada forte, mas exige confirmar método de preparo.
- **6/10 · HAMBURGUER SWIFT GRAN RESERVA 400G:** Hambúrguer de 400 g pode funcionar ajustando unidades, mas conferir o rendimento para quatro.
- **3/10 · FILE DE TILAPIA SWIFT 400G:** Tilápia de 400 g como único principal tende a ficar pequena para quatro pessoas, exigindo mais unidades.
- **0/10 · PICANHA SWIFT BLACK KG:** Picanha premium por quilo não respeita o objetivo de André de controlar orçamento e ganhar praticidade.

### Pop-up: Acompanhamento

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616472 | MANDIOCA SWIFT 600G | 10 | ideal | 30.4% | R$ 354,458 |
| 616394 | FAROFA TRADICIONAL SWIFT 400G | 7 | boa alternativa | 31.5% | R$ 1,028,518 |
| 616500 | MISTURA DE 4 LEGUMES SWIFT 300G | 6 | alternativa com ressalvas | 35.6% | R$ 309,173 |
| 619184 | BATATA RUSTICA PRE FRITA SWIFT 400G | 3 | pouco adequada | 42.5% | R$ 192,037 |
| 617493 | FETTUCINE COM PEITO DE PERU E BROCOLIS SWIFT 350G | 0 | inadequada | 25.0% | R$ 521,931 |

**Feedback imediato por escolha:**

- **10/10 · MANDIOCA SWIFT 600G:** Mandioca 600 g é compartilhável e possui boa MC%; confirmar se atende à família sem sobrar.
- **7/10 · FAROFA TRADICIONAL SWIFT 400G:** Farofa tradicional tem massa estimada alta e combina com uma refeição em família; confirmar que já não tem em casa.
- **6/10 · MISTURA DE 4 LEGUMES SWIFT 300G:** Mix de legumes 300 g acrescenta variedade, mas a quantidade pode ser pequena para quatro.
- **3/10 · BATATA RUSTICA PRE FRITA SWIFT 400G:** Batata rústica 400 g exige conferir porções e custo para uma família de quatro.
- **0/10 · FETTUCINE COM PEITO DE PERU E BROCOLIS SWIFT 350G:** Fettuccine pronto de 350 g não atende bem como acompanhamento compartilhado por quatro ao lado do principal.

### Pop-up: Bebida

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 622971 | SUCO DE UVA NATURAL ONE 900 ML | 10 | ideal | 20.2% | R$ 114,416 |
| 622956 | SUCO DE LARANJA NATURAL ONE 900 ML | 7 | boa alternativa | 17.4% | R$ 125,554 |
| 622530 | COCA COLA GARRAFA 2L | 6 | alternativa com ressalvas | 18.0% | R$ 136,406 |
| 622532 | COCA COLA LATA 350ML | 3 | pouco adequada | 13.4% | R$ 30,699 |
| 623431 | SUCO MACA NATURAL ONE 180 ML | 0 | inadequada | 16.5% | R$ 11,869 |

**Feedback imediato por escolha:**

- **10/10 · SUCO DE UVA NATURAL ONE 900 ML:** Suco de uva 900 ml é opção compartilhável, com massa estimada interessante; ajustar volume para quatro.
- **7/10 · SUCO DE LARANJA NATURAL ONE 900 ML:** Suco de laranja 900 ml também funciona; confirmar preferência e quantidade.
- **6/10 · COCA COLA GARRAFA 2L:** Coca-Cola 2 L serve a quatro, mas o cliente não disse se prefere refrigerante.
- **3/10 · COCA COLA LATA 350ML:** Lata de 350 ml é uma bebida individual, não uma escolha eficiente para quatro.
- **0/10 · SUCO MACA NATURAL ONE 180 ML:** Suco de 180 ml não atende quatro pessoas como única bebida.

### Pop-up: Sobremesa

| Código | Produto real da base | Pontos | Avaliação | MC% ref. | MM estimada |
|---:|---|---:|---|---:|---:|
| 616283 | PUDIM DE LEITE  SWIFT 90G | 10 | ideal | 29.8% | R$ 164,231 |
| 623708 | PUDIM LEITE CONDENSADO SWIFT 550 G | 7 | boa alternativa | 23.9% | R$ 49,967 |
| 617247 | ACAI SWIFT 500G | 6 | alternativa com ressalvas | 37.4% | R$ 314,081 |
| 616444 | MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G | 3 | pouco adequada | 21.8% | R$ 119,235 |
| 616281 | PETIT GATEAU CHOCOLATE SWIFT 240G | 0 | inadequada | 23.1% | R$ 412,821 |

**Feedback imediato por escolha:**

- **10/10 · PUDIM DE LEITE  SWIFT 90G:** Quatro pudins de 90 g permitem servir uma porção a cada pessoa e controlar desperdício; boa MC%.
- **7/10 · PUDIM LEITE CONDENSADO SWIFT 550 G:** Pudim de 550 g pode ser dividido em família, mas confirmar aceitação e custo total.
- **6/10 · ACAI SWIFT 500G:** Açaí 500 g pode ser repartido, tem MC% alta, mas confirmar preferências e porções.
- **3/10 · MOUSSE DE CHOCOLATE AO LEITE SWIFT 80G:** Um único mousse de 80 g não serviria quatro pessoas; seria necessário comprar quatro.
- **0/10 · PETIT GATEAU CHOCOLATE SWIFT 240G:** Petit gâteau de 240 g como única sobremesa pode não render para quatro e exige preparo extra.

### Estrutura de diálogos

As falas A–D abaixo são independentes do pop-up. O campo `{produto}` é substituído pelo nome do item efetivamente escolhido no pop-up. O cliente responde de acordo com a confiança e o resultado.

#### Abordagem inicial · `andre_01_start`

**Antes de escolher:** O vendedor inicia.

- **10/10 — Oi, tudo bem? Você tem um minuto para eu conhecer sua rotina de compras?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **9/10 — Boa tarde! É um bom momento para uma conversa rápida?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **8/10 — Olá! Sou do projeto EPAV. Você pode falar um instante?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **7/10 — Oi! Se estiver livre, posso te fazer uma pergunta sobre as compras da semana?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **6/10 — Boa tarde! Para não te atrapalhar, posso ser bem objetivo?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **5/10 — Oi! Você está com tempo agora ou prefere outro momento?**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: A abordagem foi educada, mas ainda pode se conectar melhor ao momento do cliente.
- **9/10 — Posso falar com você em um momento mais tranquilo?**
  - Cliente: Tudo bem, posso conversar um pouco.
  - Feedback do diálogo: Você verificou a disponibilidade da pessoa antes de tentar vender.
- **1/10 — Tem que aproveitar agora porque a oferta pode acabar.**
  - Cliente: Agora não é o melhor momento para insistir.
  - Feedback do diálogo: Você tentou acelerar o atendimento sem respeitar o momento da pessoa.

#### Descoberta · `andre_02_discover`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você costuma organizar as refeições para os quatro durante a semana?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **9/10 — Qual é a parte mais difícil: decidir o cardápio ou fazer render?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **8/10 — Quanto tempo você costuma ter para preparar o jantar?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **7/10 — Tem alguém em casa com preferência alimentar que eu deva conhecer?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **6/10 — Você costuma aproveitar sobras em outras refeições?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **5/10 — Qual refeição da família precisa ser mais prática?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: A pergunta pode funcionar, mas explora menos o que o cliente acabou de dizer.
- **9/10 — O que você mais valoriza ao fazer compras: tempo, quantidade ou preço?**
  - Cliente: Boa pergunta. Deixa eu explicar melhor como faço minhas compras.
  - Feedback do diálogo: A pergunta investiga a rotina e abre espaço para o cliente explicar suas prioridades.
- **2/10 — Já posso montar o pedido completo para você?**
  - Cliente: Acho que você ainda não entendeu o que eu preciso.
  - Feedback do diálogo: Você pressupôs uma necessidade sem descobrir se ela realmente existe.

#### Aprofundamento · `andre_03_deepen`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Qual seria uma quantidade suficiente para o prato principal?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **9/10 — Você já tem algum acompanhamento em casa?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **8/10 — A família gosta de opções que fiquem prontas rápido?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **7/10 — Quais partes da refeição você costuma comprar fora?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **6/10 — Vale montar um cardápio com porções ajustadas para quatro?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **5/10 — Se a soma ultrapassar o orçamento, o que é prioridade manter?**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: Você manteve a conversa, porém deixou passar informações que ajudariam na escolha.
- **9/10 — Posso confirmar uma coisa que você comentou antes de sugerir os produtos?**
  - Cliente: Sim, isso é importante para mim. Vamos considerar na sugestão.
  - Feedback do diálogo: Você aproveitou a conversa para detalhar a necessidade, em vez de supor a resposta.
- **0/10 — Não precisa me contar mais nada. Eu já sei o que indicar.**
  - Cliente: Não quero escolher antes de esclarecer minhas prioridades.
  - Feedback do diálogo: A fala desviou a atenção das prioridades declaradas pelo cliente.

#### Entrada · `andre_04_entrada`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Entrada** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como entrada porque você comentou sobre uma refeição prática para quatro pessoas e o orçamento. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Prato principal · `andre_05_principal`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Prato principal** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como prato principal porque você comentou sobre uma refeição prática para quatro pessoas e o orçamento. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Acompanhamento · `andre_06_acompanhamento`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Acompanhamento** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como acompanhamento porque você comentou sobre uma refeição prática para quatro pessoas e o orçamento. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Bebida · `andre_07_bebida`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Bebida** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como bebida porque você comentou sobre uma refeição prática para quatro pessoas e o orçamento. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Objeção contextual · `andre_08_objection`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Você já tem algum desses itens em casa? Podemos evitar repetir.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **9/10 — Se o total ficar acima do que planejou, qual item seria prioridade?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Podemos ajustar as quantidades antes de falar em pedido.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **8/10 — Posso separar o essencial e deixar os complementos como opcionais?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Você acolheu a objeção e procurou entender o motivo sem pressionar.
- **7/10 — O que pesa mais hoje: preço total ou praticidade?**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **7/10 — Se o orçamento não permitir, faz sentido comprar outra vez, quando precisar.**
  - Cliente: Obrigado por considerar meu motivo. Assim posso avaliar sem pressão.
  - Feedback do diálogo: Sua resposta mantém a conversa, mas ainda precisa investigar o motivo da resistência.
- **1/10 — São quatro pessoas, então leva o dobro para garantir.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.
- **0/10 — Tem que aproveitar hoje, mesmo que passe do orçamento.**
  - Cliente: Eu acabei de explicar minha preocupação. Prefiro que você respeite isso.
  - Feedback do diálogo: Você contestou ou ignorou a objeção, o que pode aumentar a resistência.

#### Sobremesa · `andre_09_sobremesa`

**Antes de escolher:** Cliente pode reagir conforme confiança.

**Primeiro:** abrir o pop-up de **Sobremesa** com cinco cards; aguardar escolha e feedback. **Depois:** apresentar quatro alternativas de diálogo A–D.

- **10/10 — Pensei em {produto} como sobremesa porque você comentou sobre uma refeição prática para quatro pessoas e o orçamento. Faz sentido para você?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você justificou a sugestão usando informações reais da conversa. A adequação do item é avaliada separadamente.
- **9/10 — Antes de incluir {produto}, quero confirmar se combina com o que você costuma consumir.**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você confirmou preferência em vez de presumir que o cliente quer o item.
- **8/10 — Posso conferir com você se a quantidade de {produto} atende ao seu caso?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você pensou em porção e desperdício, importantes na venda consultiva.
- **8/10 — Se essa opção não for útil, a gente não precisa colocá-la. O que acha de {produto}?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você deixou a escolha com o cliente, sem forçar a venda.
- **7/10 — O produto que selecionei foi {produto}. Você já conhece ou já consumiu?**
  - Cliente: Obrigado por perguntar. Posso analisar com calma.
  - Feedback do diálogo: Você investigou familiaridade com o item, mas ainda precisa conectar com a necessidade.
- **6/10 — Uma possibilidade seria {produto}. Vale explicar melhor antes de decidir?**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Você abriu uma conversa, mas justificou pouco a escolha.
- **4/10 — Pensei em {produto} porque costuma ser um produto procurado.**
  - Cliente: Preciso ter certeza de que isso realmente faz sentido para mim.
  - Feedback do diálogo: Popularidade não substitui a análise da rotina, da margem e do perfil da pessoa.
- **2/10 — Vou adicionar {produto} à sua cesta porque assim ela fica mais completa.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Completar as cinco categorias não significa que o cliente precise levar tudo.
- **0/10 — Esse produto serve para qualquer pessoa, não precisa conferir ingredientes nem quantidade.**
  - Cliente: Não quero comprar só porque você quer completar a cesta.
  - Feedback do diálogo: Nunca prometa segurança alimentar ou utilidade sem conferir rótulo e necessidade.

#### Encerramento · `andre_10_closing`

**Antes de escolher:** Cliente pode reagir conforme confiança.

- **10/10 — Quer revisar o que realmente falta para as quatro pessoas?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **9/10 — Faz sentido fechar só o essencial e deixar o restante para outra vez?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **8/10 — Posso conferir as porções antes de você decidir?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **7/10 — Quer que eu organize uma lista para você avaliar sem pressa?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **6/10 — Se não couber no orçamento, prefere ficar apenas com uma sugestão?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **5/10 — Algum produto não faz sentido para sua família e deve sair?**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: O encerramento é possível, mas faltou ajustar a próxima ação ao interesse da pessoa.
- **9/10 — Você pode decidir com calma. Quer que eu deixe a sugestão organizada?**
  - Cliente: Obrigado por respeitar minha decisão.
  - Feedback do diálogo: Você respeitou a autonomia do cliente e conduziu um encerramento claro.
- **0/10 — Então está fechado, né? Vou contar como venda.**
  - Cliente: Prefiro encerrar por aqui. Não quero pressão.
  - Feedback do diálogo: Pressionar um fechamento pode prejudicar o relacionamento mesmo quando há interesse.

## Integração (sem IA)

Use `proximaCena(cliente, estado)` para saber se o próximo componente da tela é `popup_produtos` ou `dialogo`.

No pop-up, renderize `opcoes` como cinco cards clicáveis sem letras; após clique, execute `escolherProduto(cliente, estado, etapaId, codigo)` e exiba `feedbackEducativo` e `pontosDaEscolha`.

Depois do feedback, use `proximaCena` novamente; ela retornará as quatro opções A–D para apresentar o item. Use `escolher(cliente, estado, etapaId, idAlternativa)` para continuar.

No encerramento, `resultado(estado)` entrega as notas separadas e a nota geral.

