# ぴぴっと計算 | 筆算プリント

美しいMathJax数式を使った筆算プリント生成アプリです。

## 🌟 特徴

- **美しい数式表示**: MathJaxによる高品質な数式レンダリング
- **筆算の表示**: 足し算、引き算、掛け算、割り算の筆算を正しく表示
- **割り算の筆算**: `\enclose{longdiv}`記法による伝統的な筆算表示
- **桁ずらし**: 掛け算の途中計算で`\phantom{0}`による美しい桁ずらし
- **カスタマイズ可能**: 桁数、問題数、演算種類を自由に設定
- **答え表示切り替え**: 問題と解答の表示を簡単に切り替え

## 🚀 使い方

### 開発環境での実行

```bash
# 依存関係をインストール
yarn install

# 開発サーバーを起動
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 本番ビルド

```bash
# 本番用ビルド
yarn build

# 本番サーバー起動
yarn start
```

## 🛠 技術スタック

- **フレームワーク**: Next.js 14
- **数式表示**: better-react-mathjax (MathJax 3)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript

## 📝 数式記法

### 割り算の筆算
```latex
\require{enclose}
12 \enclose{longdiv}{345}
```

### 掛け算の桁ずらし
```latex
\begin{array}{r}
111 \\
\times\,12 \\
\hline
222 \\
111\phantom{0} \\
\hline
1332
\end{array}
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下で配布されています。詳細は [LICENSE](./LICENSE) ファイルをご覧ください。

## 👨‍💻 作者

**calliope** - [GitHub](https://github.com/calliope-pro)

---

© 2025-present calliope. All rights reserved. Licensed under MIT License.
