export function embed(text: string): number[] {
  return text
    .split("")
    .slice(0, 10)
    .map(c => c.charCodeAt(0) / 255);
}
