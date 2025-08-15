import type { Metadata } from "next";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";

export const metadata: Metadata = {
  title: "ぴぴっと計算｜筆算プリント生成ツール - 小学生の算数ドリル",
  description: "小学生向けの筆算プリントを無料で自動生成。足し算、引き算、掛け算、割り算の美しい筆算が作成できます。MathJax数式で高品質な算数ドリルをご家庭で簡単に！",
  keywords: ["筆算", "算数", "小学生", "ドリル", "プリント", "足し算", "引き算", "掛け算", "割り算", "無料", "自動生成", "家庭学習", "算数プリント", "計算練習"],
  authors: [{ name: "calliope-pro", url: "https://github.com/calliope-pro" }],
  creator: "calliope-pro",
  publisher: "calliope-pro",
  category: "Education",
  classification: "Education",
  openGraph: {
    title: "ぴぴっと計算｜筆算プリント生成ツール",
    description: "小学生向けの美しい筆算プリントを無料で自動生成。MathJax数式による高品質な算数ドリルで家庭学習をサポート。",
    url: "https://pipitto-keisan.netlify.app",
    siteName: "ぴぴっと計算",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ぴぴっと計算 - 筆算プリント生成ツール",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ぴぴっと計算｜筆算プリント生成ツール",
    description: "小学生向けの美しい筆算プリントを無料で自動生成",
    images: ["/og-image.png"],
    creator: "@calliope_pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://pipitto-keisan.netlify.app",
    languages: {
      "ja-JP": "https://pipitto-keisan.netlify.app",
    },
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ぴぴっと計算",
    "alternateName": "筆算プリント生成ツール",
    "description": "小学生向けの筆算プリントを無料で自動生成。足し算、引き算、掛け算、割り算の美しい筆算が作成できます。",
    "url": "https://pipitto-keisan.netlify.app",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "HTML5, CSS3, JavaScript",
    "softwareVersion": "1.0.0",
    "author": {
      "@type": "Person",
      "name": "calliope-pro",
      "url": "https://github.com/calliope-pro"
    },
    "creator": {
      "@type": "Person", 
      "name": "calliope-pro",
      "url": "https://github.com/calliope-pro"
    },
    "license": "https://opensource.org/licenses/MIT",
    "inLanguage": "ja-JP",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "小学生"
    },
    "educationalLevel": "elementary school",
    "learningResourceType": "worksheet",
    "about": [
      {
        "@type": "Thing",
        "name": "算数"
      },
      {
        "@type": "Thing", 
        "name": "筆算"
      },
      {
        "@type": "Thing",
        "name": "小学生教育"
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-rounded antialiased">
        <MathJaxContext config={mathJaxConfig}>
          {children}
        </MathJaxContext>
      </body>
    </html>
  );
}
