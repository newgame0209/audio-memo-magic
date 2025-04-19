
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, Ear, Brain, Speech, LayoutGrid, Settings } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            学習の<span className="text-primary">バリア</span>を取り除く
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            文字の読み書きに困難を感じる方に向けて、音声とテキストを組み合わせたマルチセンソリーな学習環境を提供します。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="文字認識と音声化"
            description="手書き文字を正確に認識し、自然な音声で読み上げます。文字の認識が苦手な方でも内容を理ably理解できます。"
            icon={<Speech className="h-8 w-8" />}
            delay={100}
          />
          
          <FeatureCard 
            title="マルチセンソリー学習"
            description="視覚、聴覚、触覚を組み合わせた学習方法で、より効果的な理解と記憶の定着をサポートします。"
            icon={<Brain className="h-8 w-8" />}
            delay={200}
          />
          
          <FeatureCard 
            title="カスタマイズ可能な読み上げ"
            description="読み上げ速度、音声、ピッチを個々のニーズに合わせて調整できます。"
            icon={<Settings className="h-8 w-8" />}
            delay={300}
          />
          
          <FeatureCard 
            title="読みやすいレイアウト"
            description="ディスレクシアの方に配慮したフォントとレイアウトで、読みやすさを重視しています。"
            icon={<LayoutGrid className="h-8 w-8" />}
            delay={400}
          />
          
          <FeatureCard 
            title="音声フィードバック"
            description="文字を書きながらリアルタイムで音声フィードバックを受け取れ、学習の正確性を高めます。"
            icon={<Ear className="h-8 w-8" />}
            delay={500}
          />
          
          <FeatureCard 
            title="学習進捗の可視化"
            description="個々の学習ペースに合わせた進捗管理で、着実な成長を実感できます。"
            icon={<BookOpen className="h-8 w-8" />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
