const PUBLIC_RANKING_URL = 'https://epav-product-evaluator.kevinernandes2012.workers.dev/v1/ranking';

export async function readRanking({ signal, fetcher = fetch } = {}) {
  const response = await fetcher(PUBLIC_RANKING_URL, {
    method: 'GET', redirect: 'error', signal,
  });
  const result = await response.json();
  if (!response.ok) throw new Error(typeof result.detail === 'string' ? result.detail : 'SERVICE');
  if (!Array.isArray(result.resultados) || result.resultados.length > 20 ||
      result.resultados.some(row => !row || typeof row !== 'object')) throw new Error('SERVICE');
  return result.resultados;
}
