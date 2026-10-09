# Roteiros e produtos revisados — 9 de outubro de 2026

O conteúdo de `epav_popup_produtos_sem_ia.zip` foi integrado às telas existentes do jogo.

- Cada cliente tem seus cinco SKUs fixos por categoria: entrada, principal, acompanhamento, bebida e sobremesa.
- Os produtos aparecem em cards, sem letras A–D. A classificação e a nota só aparecem depois do clique.
- A nota de produto é de 0 a 10 e aparece imediatamente, sem chamada de avaliação nem IA.
- Ao continuar, quatro falas A–D usam o nome do produto realmente escolhido. Há pelo menos oito falas cadastradas por etapa.
- A retomada preserva a escolha, o feedback, a confiança e o sorteio, sem pontuar novamente.
- O cliente pode recusar e encerrar respeitosamente. Uma proposta não obriga a compra de cinco produtos.
- Diálogo e produtos têm notas separadas. O resultado completo combina 65% de diálogo e 35% de produtos; no parcial, considera as decisões realizadas.
- O total permanece normalizado para 400 pontos. A qualidade enviada ao ranking é normalizada para o intervalo já permitido, sem mudar as regras compartilhadas do Firebase.

## Fotos e fichas

`POST /v2/recomendacoes` da API de regras verifica cliente, etapa e IDs e pede os códigos exatos ao catálogo compartilhado. O catálogo usa o mesmo Redis das duas edições e não consulta cada documento separadamente.

Uma foto só é vinculada ao SKU exato. Se o código não tiver foto disponível no catálogo atual, o card informa isso; não há substituição por outro alimento. Se o serviço estiver indisponível, as cinco propostas pedagógicas continuam disponíveis com fichas de referência e sem fotos.

As referências de MC% e massa de margem vêm do material recebido. São valores históricos e estimados, não preços atuais ou relatório contábil. O destaque financeiro usa MC% ≥ 25% ou massa no percentil superior de 30% das cinco opções da categoria. A adequação ao cliente tem prioridade.

Partidas antigas ficam na chave original. Os novos roteiros usam uma chave própria de progresso.

Veja o [banco de diálogos e produtos](dialogos_epav_popup_produtos.md).
