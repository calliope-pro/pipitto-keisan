import React from 'react';
import { MathJax } from 'better-react-mathjax';

interface LatexDivisionProps {
  a: number;
  b: number;
  show: boolean;
}

export function LatexDivision({ a, b, show }: LatexDivisionProps) {
  const generateLatex = () => {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    
    if (show) {
      // 途中過程を含む割り算の表示（longdiv記法を使用）
      if (remainder === 0) {
        return `
\\require{enclose}
\\begin{array}{r}
${quotient} \\\\
${b} \\enclose{longdiv}{${a}} \\\\
\\underline{${a}} \\\\
0
\\end{array}
        `;
      } else {
        const subtracted = quotient * b;
        return `
\\require{enclose}
\\begin{array}{r}
${quotient} \\\\
${b} \\enclose{longdiv}{${a}} \\\\
\\underline{${subtracted}} \\\\
${remainder}
\\end{array}
        `;
      }
    } else {
      return `
\\require{enclose}
\\begin{array}{r}
\\phantom{${quotient}} \\\\
${b} \\enclose{longdiv}{${a}}
\\end{array}
      `;
    }
  };

  return (
    <div className="inline-block p-4 bg-white border rounded-lg">
      <MathJax>{`$$${generateLatex()}$$`}</MathJax>
    </div>
  );
}