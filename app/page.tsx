'use client';
import React, { useMemo, useState } from 'react';
import { generateWorksheet } from '@/utils/generateProblems';
import type { Operation, DivisionMode, Problem } from '@/utils/types';
import LatexProblem from '@/components/LatexProblem';
import clsx from 'clsx';

export default function Page(){
  const [ops, setOps] = useState<Operation[]>([]);
  const [dA, setDA] = useState(2);
  const [dB, setDB] = useState(2);
  const [count, setCount] = useState(9);
  const [divisionMode, setDivisionMode] = useState<DivisionMode>('remainder-allowed');
  const [showAnswers, setShowAnswers] = useState(false);
  const [seed, setSeed] = useState(0);

  useMemo(() => {
    const origRandom = Math.random;
    let s = seed || Date.now();
    Math.random = function() {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    } as any;
    return () => { Math.random = origRandom; }
  }, [seed]);

  const problems = useMemo<Problem[]>(() => {
    const opsToUse = ops.length === 0 ? ['add','sub','mul','div'] as Operation[] : ops;
    return generateWorksheet({ ops: opsToUse, dA, dB, count, divisionMode });
  }, [ops, dA, dB, count, divisionMode, seed]);

  const toggleOp = (op: Operation) => {
    setOps(prev => prev.includes(op) ? prev.filter(o => o !== op) : [...prev, op]);
  };

  return (
    <main className="max-w-5xl mx-auto p-5 md:p-8">
      <header className="no-print mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-500 flex items-center justify-center text-white text-2xl shadow-soft">ぴ</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">ぴぴっと計算</h1>
            <p className="text-sm text-gray-600">おうちで簡単！筆算プリント</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/calliope-pro/pipitto-keisan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <div className="text-sm text-gray-500">{new Date().toLocaleDateString('ja-JP')}</div>
        </div>
      </header>

      <section className="no-print mb-6 rounded-2xl bg-white shadow-soft p-4 md:p-6">
        <h2 className="text-lg font-semibold mb-4">設定</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {(['add','sub','mul','div'] as Operation[]).map(op => (
                <button key={op} onClick={() => toggleOp(op)}
                  className={clsx('px-3 py-2 rounded-xl border', 
                    ops.includes(op) ? 'bg-sky-100 border-sky-400' : 'bg-gray-50 hover:bg-gray-100')}>
                  {op==='add'&&'足し算'}{op==='sub'&&'引き算'}{op==='mul'&&'掛け算'}{op==='div'&&'割り算'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label className="w-28 text-sm text-gray-700">左の桁数</label>
              <input type="number" value={dA} min={1} max={10} onChange={e=>setDA(Number(e.target.value))}
                className="w-28 rounded-xl border px-3 py-2"/>
            </div>
            <div className="flex items-center gap-3">
              <label className="w-28 text-sm text-gray-700">右の桁数</label>
              <input type="number" value={dB} min={1} max={10} onChange={e=>setDB(Number(e.target.value))}
                className="w-28 rounded-xl border px-3 py-2"/>
            </div>
            <div className="flex items-center gap-3">
              <label className="w-28 text-sm text-gray-700">問題数</label>
              <input type="number" value={count} min={1} max={60} onChange={e=>setCount(Number(e.target.value))}
                className="w-28 rounded-xl border px-3 py-2"/>
            </div>
            <div className="flex items-center gap-3">
              <label className="w-28 text-sm text-gray-700">割り算の設定</label>
              <select value={divisionMode} onChange={e=>setDivisionMode(e.target.value as any)} className="rounded-xl border px-3 py-2">
                <option value="remainder-allowed">余りありOK</option>
                <option value="no-remainder">余りなし</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <button onClick={()=>setSeed(s=>s+1)} className="px-4 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-soft">問題を作り直す</button>
              <button onClick={()=>setShowAnswers(v=>!v)}
                className={clsx('px-4 py-2 rounded-2xl shadow-soft', showAnswers ? 'bg-emerald-500 text-white':'bg-white border hover:bg-gray-50')}>
                {showAnswers? '答えを隠す':'答えを表示'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="worksheet-root" className="space-y-6">
        <h2 className="text-xl font-semibold">{showAnswers ? '解答' : '問題'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <LatexProblem key={i} p={p} show={showAnswers} />
          ))}
        </div>
      </section>

      <section className="no-print mt-12 prose prose-sm max-w-none">
        <h2 className="text-xl font-semibold mb-4">筆算プリントについて</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">このツールの特徴</h3>
            <ul className="space-y-1">
              <li>• <strong>美しい数式表示</strong>: MathJax数式による高品質な筆算</li>
              <li>• <strong>カスタマイズ可能</strong>: 桁数や問題数を自由に設定</li>
              <li>• <strong>4つの演算</strong>: 足し算、引き算、掛け算、割り算に対応</li>
              <li>• <strong>筆算の正しい表示</strong>: 桁ずらしや割り算の長除法記法</li>
              <li>• <strong>完全無料</strong>: 会員登録不要でご利用いただけます</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">家庭学習での活用</h3>
            <ul className="space-y-1">
              <li>• <strong>毎日の算数練習</strong>: 宿題の補完や予習・復習に</li>
              <li>• <strong>苦手分野の克服</strong>: 特定の演算を重点的に練習</li>
              <li>• <strong>計算スピード向上</strong>: 繰り返し練習で計算力アップ</li>
              <li>• <strong>親子で学習</strong>: 答え表示機能で採点も簡単</li>
              <li>• <strong>個別対応</strong>: お子様のレベルに合わせた問題作成</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">小学生の算数学習をサポート</h3>
          <p className="text-sm text-blue-700">
            筆算は小学生の算数学習において重要な基礎技能です。正しい筆算の書き方を身につけることで、
            計算ミスを減らし、より複雑な数学への理解を深めることができます。
            このツールで生成される美しい筆算プリントは、お子様の学習意欲を高め、
            効果的な算数学習をサポートします。
          </p>
        </div>
      </section>

      <footer className="no-print text-center text-xs text-gray-500 my-10 space-y-2">
        <div className="flex justify-center gap-4 mb-2">
          <a href="/terms" className="underline hover:text-gray-700">利用規約</a>
          <a href="/privacy" className="underline hover:text-gray-700">プライバシーポリシー</a>
          <a href="https://github.com/calliope-pro/pipitto-keisan" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">GitHub</a>
        </div>
        <div>© 2025-present calliope. All rights reserved.</div>
        <div>Licensed under <a href="https://github.com/calliope-pro/pipitto-keisan/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">MIT License</a></div>
      </footer>
    </main>
  );
}
