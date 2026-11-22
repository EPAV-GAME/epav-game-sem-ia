import { readFile, writeFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { productImageUrl } from '../js/product-client.mjs';

const token = process.env.EPAV_CATALOG_ID_TOKEN;
if (!token) throw new Error('Defina EPAV_CATALOG_ID_TOKEN com um ID token Firebase do EPAV.');

const context = {};
runInNewContext(await readFile(new URL('../js/popup-data.js', import.meta.url), 'utf8'), context);
const codes = [...new Set(Object.values(context.EpavPopupDados).flatMap(client =>
  Object.values(client.escolha_produtos_popup).flatMap(popup => popup.opcoes.map(option => String(option.codigo)))
))].sort();
const entries = new Map();
for (let start = 0; start < codes.length; start += 25) {
  const batch = codes.slice(start, start + 25);
  const response = await fetch('https://epav-product-evaluator.kevinernandes2012.workers.dev/v1/catalogo/itens', {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(45000),
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ codigos: batch }),
  });
  if (!response.ok) throw new Error('Falha na consulta do catálogo: HTTP ' + response.status);
  const { produtos, codigos_sem_foto } = await response.json();
  const byCode = new Map(produtos.map(card => [card.codigo, card]));
  for (const code of batch) {
    const card = byCode.get(code);
    if (!card && !codigos_sem_foto.includes(code)) throw new Error('Resposta incompleta para o SKU ' + code);
    if (card && !productImageUrl(card.imagem_url)) throw new Error('Foto inválida para o SKU ' + code);
    entries.set(code, {
      tiposProduto: card?.tiposProduto ?? [], ocasioes: card?.ocasioes ?? [],
      marca: card?.marca ?? 'Swift', formato: card?.formato ?? null,
      unidade_medida: card?.unidade_medida ?? null, peso_embalagem_kg: card?.peso_embalagem_kg ?? null,
      imagem_url: card?.imagem_url ?? null,
    });
  }
}
await writeFile(new URL('../js/catalogo-popup.js', import.meta.url),
  '// Fichas públicas dos SKUs do roteiro. Gerado a partir do catálogo EPAV.\n' +
  'window.EPAV_POPUP_CATALOG = ' + JSON.stringify(Object.fromEntries(entries), null, 2) + ';\n');
