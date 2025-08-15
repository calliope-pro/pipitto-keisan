'use client';
import React from 'react';
import type { Problem } from '@/utils/types';
import { LatexAddition } from './LatexAddition';
import { LatexSubtraction } from './LatexSubtraction';
import { LatexMultiplication } from './LatexMultiplication';
import { LatexDivision } from './LatexDivision';

export default function LatexProblem({ p, show }: { p: Problem; show: boolean; }) {
  switch (p.op) {
    case 'add':
      return <LatexAddition a={p.a} b={p.b} show={show} />;
    case 'sub':
      return <LatexSubtraction a={p.a} b={p.b} show={show} />;
    case 'mul':
      return <LatexMultiplication a={p.a} b={p.b} show={show} />;
    case 'div':
      return <LatexDivision a={p.a} b={p.b} show={show} />;
    default:
      return (
        <div className="p-4 bg-white border rounded-lg">
          <p>不明な演算タイプ: {p.op}</p>
        </div>
      );
  }
}