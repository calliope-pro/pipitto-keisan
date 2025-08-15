export type Operation = 'add'|'sub'|'mul'|'div';
export type DivisionMode = 'remainder-allowed'|'no-remainder';

export interface Problem {
  id: string;
  a: number;
  b: number;
  op: Operation;
  divisionMode?: DivisionMode;
}
