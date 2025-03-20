
import React from 'react';
import FeatureCard from './FeatureCard';
import { Mic, Edit, Bookmark, PlayCircle } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            あらゆる思考に対応する<span className="text-primary">強力な</span>ツールセット
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            書くだけでは覚えれない。そんな方に。書いた文字が音声になり、何度も聞いて定着できたらどうでしょう？勉強や学習はもちろん、仕事ではアイデアや会議の議事録にも使えます。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="手書き文字の音声化"
            description="ノートで書いたメモや学習内容をAI音声で読み上げ、聴覚的な記憶定着をサポートします。"
            icon={<Mic className="h-8 w-8" />}
            delay={100}
          />
          
          <FeatureCard 
            title="テキストデータの音声化"
            description="アプリ内で入力したテキストや、コピーしてきた文章を自然なAI音声で読み上げます。"
            icon={<Edit className="h-8 w-8" />}
            delay={200}
          />
          
          <FeatureCard 
            title="しおり機能"
            description="ノートにしおりをタグ付けし、後から重要ポイントを素早く見つけることができます。"
            icon={<Bookmark className="h-8 w-8" />}
            delay={300}
          />
          
          <FeatureCard 
            title="音声再生機能"
            description="スピード調整やリピート再生に対応し、自分のペースで聞き返すことができます。"
            icon={<PlayCircle className="h-8 w-8" />}
            delay={400}
          />
          
          <FeatureCard 
            title="クラウド同期"
            description="デバイス間でのノートとオーディオの同期で、いつでもどこでもアクセスできます。"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            }
            delay={500}
          />
          
          <FeatureCard 
            title="マルチデバイス対応"
            description="iPadやiPhone、PCなど様々なデバイスで快適に利用できる最適化されたインターフェース。"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            }
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
