
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const DemoVideos = () => {
  return (
    <section id="demos" className="py-12 md:py-20 px-4 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            使い方デモ
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            しゃべるノートがどのように機能するか、実際の使用例をご覧ください
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 animate-fade-in-up">
            <div className="relative pb-[56.25%] overflow-hidden">
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                controls
              >
                <source src="https://jikkenpro.netlify.app/videos/speaking-note-demo1.mp4" type="video/mp4" />
                お使いのブラウザはビデオタグをサポートしていません。
              </video>
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">手書き文字の音声化</h3>
              <p className="text-slate-600 text-xs md:text-sm">
                手書きノートをAIが認識して音声に変換する様子をご覧ください。勉強内容の記憶定着に最適です。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="relative pb-[56.25%] overflow-hidden">
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                controls
              >
                <source src="https://jikkenpro.netlify.app/videos/speaking-note-demo2.mp4" type="video/mp4" />
                お使いのブラウザはビデオタグをサポートしていません。
              </video>
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">リピート再生機能</h3>
              <p className="text-slate-600 text-xs md:text-sm">
                テキストを読み上げる速度調整や繰り返し機能で、自分のペースで学習内容を覚えられます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;
