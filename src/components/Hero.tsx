
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, HeadphonesIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-24 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-12 hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-block bg-secondary px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-primary mb-4 md:mb-6">
            学習障害・ディスレクシアに寄り添うノートアプリ
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            文字の壁を超えて、<br />
            <span className="text-primary">学ぶ喜び</span>を。
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-xl">
            文字の読み書きに困難を感じる方のために。手書きやテキストをAIが音声化し、マルチセンソリーな学習体験をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              className="btn-primary flex items-center group text-sm sm:text-base py-5 sm:py-6 w-full sm:w-auto justify-center"
              onClick={() => window.open('https://mynote-psi-three.vercel.app/', '_blank')}
            >
              無料で始める
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary text-sm sm:text-base py-5 sm:py-6 w-full sm:w-auto justify-center mt-3 sm:mt-0"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              機能をもっと見る
            </Button>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl md:rounded-[2.5rem] transform rotate-3 scale-[0.97]"></div>
          <div className="glass rounded-xl md:rounded-[2.5rem] overflow-hidden border-t border-l border-white/50 shadow-xl transform -rotate-3">
            <img 
              src="https://jikkenpro.netlify.app/images/note.jpg" 
              alt="しゃべるノートのイメージ" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass p-3 md:p-4 rounded-lg md:rounded-xl animate-floating shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full"></div>
              <p className="text-xs md:text-sm font-medium">AI音声で復習中...</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
