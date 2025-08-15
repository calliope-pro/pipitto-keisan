import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約｜ぴぴっと計算",
  description: "ぴぴっと計算の利用規約です。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-5 md:p-8">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>
      
      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">第1条（適用）</h2>
          <p>
            本利用規約（以下「本規約」といいます。）は、calliope-pro（以下「当方」といいます。）が提供する
            「ぴぴっと計算」（以下「本サービス」といいます。）の利用条件を定めるものです。
            利用者の皆さまには、本規約に従って本サービスをご利用いただきます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第2条（利用登録）</h2>
          <p>
            本サービスは利用登録なしでご利用いただけます。
            本サービスを利用することで、本規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第3条（サービス内容）</h2>
          <p>
            本サービスは、小学生向けの筆算プリントを無料で生成・表示する教育支援ツールです。
            足し算、引き算、掛け算、割り算の筆算問題を自動生成し、学習にご活用いただけます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第4条（利用料金）</h2>
          <p>
            本サービスは無料でご利用いただけます。
            ただし、インターネット接続に必要な通信費等は利用者の負担となります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第5条（禁止事項）</h2>
          <p>利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本サービスの内容等、本サービスに含まれる著作権、商標権その他の知的財産権を侵害する行為</li>
            <li>本サービスのサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>本サービスを商用目的で利用する行為（教育目的での利用は除く）</li>
            <li>その他、当方が不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第6条（本サービスの提供の停止等）</h2>
          <p>
            当方は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく
            本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当方が本サービスの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第7条（著作権）</h2>
          <p>
            本サービスによって生成される筆算問題は、教育目的での利用に限り自由にご利用いただけます。
            本サービス自体のソースコードはMITライセンスの下で公開されています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第8条（免責事項）</h2>
          <p>
            当方は、本サービスに関して、利用者と第三者との間において生じた取引、連絡または紛争等について
            一切責任を負いません。また、本サービスの利用によって生じたいかなる損害についても、
            当方は一切の責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第9条（サービス内容の変更等）</h2>
          <p>
            当方は、利用者への事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
            利用者はこれに同意するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第10条（利用規約の変更）</h2>
          <p>
            当方は必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
            なお、本規約の変更後、本サービスの利用を開始した場合には、当該利用者は変更後の規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">第11条（準拠法・裁判管轄）</h2>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
          </p>
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