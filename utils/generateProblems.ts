import type { Operation, DivisionMode, Problem } from './types';

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function genNumberWithDigits(d: number) {
  if (d <= 0) return 0;
  const min = d === 1 ? 0 : Math.pow(10, d - 1);
  const max = Math.pow(10, d) - 1;
  return randInt(min, max);
}
export function generateProblem(op: Operation, dA: number, dB: number, divisionMode: DivisionMode): Problem {
  let a = genNumberWithDigits(dA);
  let b = genNumberWithDigits(dB);
  if (op === 'sub' && a < b) [a, b] = [b, a];
  if (op === 'div') {
    if (b === 0) b = 1;
    if (divisionMode === 'no-remainder') {
      const q = Math.max(1, genNumberWithDigits(Math.max(1, dA - dB)));
      a = b * q;
    }
  }
  return { id: crypto.randomUUID(), a, b, op, divisionMode };
}
export function generateWorksheet(params: { ops: Operation[]; count: number; dA: number; dB: number; divisionMode: DivisionMode; }): Problem[] {
  const res: Problem[] = [];
  for (let i = 0; i < params.count; i++) {
    const op = params.ops[i % params.ops.length];
    res.push(generateProblem(op, params.dA, params.dB, params.divisionMode));
  }
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}
