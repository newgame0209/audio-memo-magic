
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            あなたのニーズに合わせた柔軟なプランをご用意しています
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 shadow-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">フリープラン</h3>
            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">基本機能を無料で体験</p>
            <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">¥0 <span className="text-sm md:text-base font-normal text-slate-500">/月</span></div>
            
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 text-sm md:text-base">
              {[
                "テキストメモの作成と編集",
                "基本的なノート管理機能",
                "クラウドストレージ 100MB",
                "月10分間の音声変換"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-green-500 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm md:text-base py-2 h-auto">
              無料で始める
            </Button>
          </div>
          
          <div className="bg-primary text-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary shadow-lg relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-bl-lg rounded-tr-xl">
              おすすめ
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">スタンダードプラン</h3>
            <p className="text-sm md:text-base text-primary-foreground/80 mb-4 md:mb-6">個人での利用に最適</p>
            <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">¥980 <span className="text-sm md:text-base font-normal text-primary-foreground/80">/月</span></div>
            
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 text-sm md:text-base">
              {[
                "フリープランの全機能",
                "無制限のノート作成",
                "クラウドストレージ 10GB",
                "月300分の音声変換",
                "高品質AI音声オプション",
                "リピート再生機能"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-white mt-0.5 opacity-90 flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <p className="text-primary-foreground/90">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-white hover:bg-white/90 text-primary text-sm md:text-base py-2 h-auto">
              今すぐ始める
            </Button>
          </div>
          
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 shadow-sm animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">プロフェッショナル</h3>
            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">ビジネス利用に最適</p>
            <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">¥1,980 <span className="text-sm md:text-base font-normal text-slate-500">/月</span></div>
            
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 text-sm md:text-base">
              {[
                "スタンダードプランの全機能",
                "クラウドストレージ 50GB",
                "月間無制限の音声変換",
                "優先サポート",
                "チーム共有機能",
                "高度な分析ツール",
                "APIアクセス"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-green-500 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm md:text-base py-2 h-auto">
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
