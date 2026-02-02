import { score } from "./score";

export function analyze(data: any) {
  const value = score(data.transactions);
  return {
    signal_score: value,
    confidence: value > 0.7 ? "high" : "medium"
  };
}
