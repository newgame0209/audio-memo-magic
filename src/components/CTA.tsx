
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, MessageCircle, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-white">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                記憶力を高め、学習効率をアップさせる<br />新しいノートの形
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 opacity-90"
                variants={fadeInUp}
              >
                今すぐしゃべるノートで、学習体験を変革しましょう
              </motion.p>
              
              {/* 簡単な3ステップ */}
              <motion.div 
                className="flex flex-col md:flex-row justify-center gap-4 mb-10"
                variants={fadeInUp}
              >
                {[
                  { icon: <Star className="h-5 w-5" />, text: "無料アカウント作成" },
                  { icon: <MessageCircle className="h-5 w-5" />, text: "メモを作成" },
                  { icon: <PlayCircle className="h-5 w-5" />, text: "音声で聞いて学習" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center bg-white/10 rounded-full px-4 py-2">
                    <div className="bg-white/20 rounded-full p-1 mr-2 flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-sm md:text-base">{`${index + 1}. ${step.text}`}</span>
                    {index < 2 && (
                      <ArrowRight className="h-4 w-4 mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={fadeInUp}
              >
                <Button 
                  className="bg-white text-primary hover:bg-white/90 text-base py-6 px-8 rounded-full group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  as={motion.button}
                >
                  無料で始める
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white text-base py-6 px-8 rounded-full flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  as={motion.button}
                >
                  デモを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              {/* ソーシャルプルーフ */}
              <motion.div 
                className="mt-8 pt-6 border-t border-white/20 text-center"
                variants={fadeInUp}
              >
                <p className="text-sm opacity-80 mb-2">10,000人以上のユーザーが信頼しています</p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white/10 rounded-md px-3 py-1 text-xs">App Store 4.8★</div>
                  <div className="bg-white/10 rounded-md px-3 py-1 text-xs">50+ 大学で利用</div>
                  <div className="bg-white/10 rounded-md px-3 py-1 text-xs">98% 満足度</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
