export function score(transactions: any[]) {
  if (!transactions || transactions.length === 0) return 0;

  const bursts = transactions.filter(tx => tx.amount > 100_000);
  return Math.min(1, bursts.length / transactions.length);
}
