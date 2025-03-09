
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-block bg-secondary px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-6">
            新しい記憶の定着方法
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            書いて覚える。<br />
            <span className="text-primary">聞いて</span>定着する。
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            iPadやiPhoneで手書きしたメモや記録をAIが音声化し、リピート再生で記憶定着を助けるノートアプリです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary flex items-center group text-base py-6">
              無料で始める
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary text-base py-6">
              機能をもっと見る
            </Button>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2.5rem] transform rotate-3 scale-[0.97]"></div>
          <div className="glass rounded-[2.5rem] overflow-hidden border-t border-l border-white/50 shadow-xl transform -rotate-3">
            <img 
              src="/lovable-uploads/42dcbe65-935d-4773-96ce-463298ccb6db.png" 
              alt="しゃべるノートのイメージ" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl animate-floating shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <p className="text-sm font-medium">AI音声で復習中...</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
