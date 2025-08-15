import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜ぴぴっと計算",
  description: "ぴぴっと計算のプライバシーポリシーです。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto p-5 md:p-8">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      
      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. 基本方針</h2>
          <p>
            calliope-pro（以下「当方」といいます。）は、「ぴぴっと計算」（以下「本サービス」といいます。）において、
            利用者の個人情報の重要性を認識し、個人情報の保護に関する法律、その他の関係法令を遵守し、
            利用者の個人情報の適切な取り扱いを行います。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. 収集する情報</h2>
          <h3 className="text-lg font-medium mb-2">2.1 利用者が直接提供する情報</h3>
          <p>
            本サービスは利用者登録を必要とせず、個人を特定できる情報の入力は求めていません。
            利用者が筆算問題の設定（桁数、問題数など）で選択した内容は、ブラウザ内でのみ処理され、
            サーバーに送信されることはありません。
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">2.2 自動的に収集される情報</h3>
          <p>本サービスでは、以下の情報が自動的に収集される場合があります：</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>IPアドレス</li>
            <li>ブラウザの種類とバージョン</li>
            <li>アクセス日時</li>
            <li>参照元ページ</li>
            <li>デバイス情報（OS、画面解像度など）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Cookieおよび関連技術</h2>
          <p>
            本サービスでは、サービスの改善や利用状況の分析のため、Cookieおよび類似の技術を使用する場合があります。
            これらの技術により収集される情報は、個人を特定するものではありません。
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">3.1 Google Analytics</h3>
          <p>
            本サービスでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。
            Google Analyticsは、トラフィックデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">3.2 Google AdSense</h3>
          <p>
            本サービスでは、第三者配信の広告サービス「Google AdSense」を利用しています。
            このサービスは、利用者の興味に応じた商品やサービスの広告を表示するため、
            当サイトや他サイトへのアクセスに関する情報（氏名、住所、メール アドレス、電話番号は含まれません）を使用することがあります。
          </p>
          <p className="mt-2">
            このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Googleの広告およびプライバシーに関するポリシー
            </a>をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的で利用します：</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>本サービスの提供・運営・改善</li>
            <li>利用状況の分析</li>
            <li>不正利用の防止</li>
            <li>広告の配信</li>
            <li>法令に基づく対応</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. 情報の共有と開示</h2>
          <p>
            当方は、利用者の個人情報を第三者に販売、譲渡、レンタルすることはありません。
            ただし、以下の場合には、個人情報を開示することがあります：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>法令に基づき開示が求められた場合</li>
            <li>利用者の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. 情報の保護</h2>
          <p>
            当方は、収集した情報の紛失、盗用、改ざんを防ぐため、適切なセキュリティ対策を実施しています。
            ただし、インターネット上での情報伝達は完全に安全であるとは保証できないため、
            絶対的な安全性を保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. 外部サービスについて</h2>
          <p>
            本サービスでは、以下の外部サービスを利用しています：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>MathJax</strong>: 数式表示のため
              （<a href="https://www.mathjax.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.mathjax.org/</a>）
            </li>
            <li>
              <strong>Google Fonts</strong>: フォント表示のため
              （<a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://fonts.google.com/</a>）
            </li>
            <li>
              <strong>Netlify</strong>: ホスティングサービス
              （<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.netlify.com/</a>）
            </li>
          </ul>
          <p className="mt-2">
            これらのサービスには、それぞれ独自のプライバシーポリシーが適用されます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Cookieの無効化</h2>
          <p>
            利用者は、ブラウザの設定によりCookieを無効にすることができます。
            ただし、Cookieを無効にした場合、本サービスの一部機能が正常に動作しない可能性があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">9. 子どもの個人情報</h2>
          <p>
            本サービスは教育目的のサービスですが、13歳未満の子どもから故意に個人情報を収集することはありません。
            万が一、13歳未満の子どもの個人情報を収集したことが判明した場合は、速やかに削除いたします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">10. プライバシーポリシーの変更</h2>
          <p>
            当方は、必要に応じて本プライバシーポリシーを変更する場合があります。
            変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">11. お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するご質問や、個人情報の取り扱いに関するお問い合わせは、
            <a href="https://github.com/calliope-pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              GitHub
            </a>までご連絡ください。
          </p>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">制定日：2025年1月1日</p>
          <p className="text-sm text-gray-600">最終更新日：2025年1月1日</p>
          <p className="text-sm text-gray-600">運営者：calliope-pro</p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <a href="/" className="inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
          ホームに戻る
        </a>
      </div>
    </main>
  );
}