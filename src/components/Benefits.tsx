
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2.5rem] transform rotate-2 scale-[0.98]"></div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl transform -rotate-2 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">手書きメモの音声化</h4>
                  <p className="text-sm text-slate-600">手書きノートを自然なAI音声で読み上げ</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">繰り返し再生</h4>
                  <p className="text-sm text-slate-600">重要部分を何度も聞いて定着</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">視覚と聴覚の両面</h4>
                  <p className="text-sm text-slate-600">二重の学習経路で記憶力アップ</p>
                </div>
                <div className="col-span-2 bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8c-3.28 0-6 2.43-6 6H2c0-6.31 4.48-8 10-8Z"></path>
                        <path d="M17 6h1c1.66 0 3 1.34 3 3v1"></path>
                        <path d="M14 3h1c2.76 0 5 2.24 5 5v1"></path>
                        <circle cx="9" cy="17" r="3"></circle>
                        <path d="m21 13-3 3-2-2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">AI音声変換</h4>
                      <p className="text-sm text-slate-600">自然でスムーズな音声でメモを聞く</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              学びやすさを<br />
              重視した設計
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              文字の読み書きに困難を感じる方の声を聞き、専門家の監修のもと開発された学習支援ツールです。音声とテキストの組み合わせにより、学習効率の向上を実現します。
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "文字の読み書きの負担を軽減",
                "音声でのリアルタイムフィードバック",
                "個々のペースに合わせた学習",
                "専門家監修の学習支援機能"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-5 w-5 mr-3 text-primary mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="btn-primary flex items-center group"
              onClick={() => window.open('https://mynote-psi-three.vercel.app/', '_blank')}
            >
              無料で始める
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
