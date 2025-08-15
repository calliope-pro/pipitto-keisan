import React from 'react';
import { MathJax } from 'better-react-mathjax';

interface LatexSubtractionProps {
  a: number;
  b: number;
  show: boolean;
}

export function LatexSubtraction({ a, b, show }: LatexSubtractionProps) {
  const generateLatex = () => {
    const result = a - b;
    
    if (show) {
      return `
\\begin{array}{r}
${a} \\\\
-\\,${b} \\\\
\\hline
${result}
\\end{array}
      `;
    } else {
      return `
\\begin{array}{r}
${a} \\\\
-\\,${b} \\\\
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