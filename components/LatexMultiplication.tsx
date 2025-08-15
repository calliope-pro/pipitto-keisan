import React from 'react';
import { MathJax } from 'better-react-mathjax';

interface LatexMultiplicationProps {
  a: number;
  b: number;
  show: boolean;
}

export function LatexMultiplication({ a, b, show }: LatexMultiplicationProps) {
  const generateLatex = () => {
    const result = a * b;
    const aStr = a.toString();
    const bStr = b.toString();
    
    if (show) {
      if (bStr.length === 1) {
        // 1桁の掛け算は途中過程なし
        return `
\\begin{array}{r}
${a} \\\\
\\times\\,${b} \\\\
\\hline
${result}
\\end{array}
        `;
      } else {
        // 複数桁の場合は途中過程を表示
        const partialResults = [];
        let positionSpaces = 0;
        
        for (let i = bStr.length - 1; i >= 0; i--) {
          const digit = parseInt(bStr[i]);
          if (digit !== 0) {
            const basePartial = a * digit;
            // 桁ずらしをスペースで表現（0埋めではなく）
            const spaces = '\\phantom{0}'.repeat(positionSpaces);
            partialResults.push(`${basePartial}${spaces}`);
          }
          positionSpaces++;
        }
        
        const partialLines = partialResults.join(' \\\\ ');
        
        return `
\\begin{array}{r}
${a} \\\\
\\times\\,${b} \\\\
\\hline
${partialLines} \\\\
\\hline
${result}
\\end{array}
        `;
      }
    } else {
      return `
\\begin{array}{r}
${a} \\\\
\\times\\,${b} \\\\
\\hline
\\phantom{${result}}
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