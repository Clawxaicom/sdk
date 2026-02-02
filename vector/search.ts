import { embed } from "./embed";

export function semanticSearch(query: string, skills: any[]) {
  const q = embed(query);

  return skills.sort((a, b) => {
    return similarity(embed(b.description), q) -
           similarity(embed(a.description), q);
  });
}

function similarity(a: number[], b: number[]) {
  return a.reduce((sum, v, i) => sum + v * (b[i] || 0), 0);
}
