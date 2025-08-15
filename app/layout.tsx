import type { Metadata } from "next";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";

export const metadata: Metadata = {
  title: "ぴぴっと計算｜筆算プリント",
  description: "おうちで簡単！美しい筆算プリントを作成できます。",
};

const mathJaxConfig = {
  loader: { load: ["[tex]/enclose"] },
  tex: {
    packages: { "[+]": ["enclose"] },
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
  },
  svg: {
    fontCache: 'local',
    scale: 1,
    minScale: 0.5,
    mtextInheritFont: false,
    merrorInheritFont: true,
    mathmlSpacing: false,
    skipAttributes: {},
    exFactor: 0.5,
    displayAlign: 'center',
    displayIndent: '0',
  },
  options: {
    menuOptions: {
      settings: {
        assistiveMml: false,
      },
    },
    renderActions: {
      addMenu: [],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen font-rounded antialiased">
        <MathJaxContext config={mathJaxConfig}>
          {children}
        </MathJaxContext>
      </body>
    </html>
  );
}
