
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-white to-secondary/30"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 id="pricing-heading" className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            あなたのニーズに合わせた柔軟なプランをご用意しています
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-8px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
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
                    <Check className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm md:text-base py-2 h-auto group">
              無料で始める
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >→</motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="bg-primary text-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary shadow-lg relative z-10"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
          >
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1">
              <Star className="h-3 w-3" aria-hidden="true" />
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
                    <Check className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  </div>
                  <p className="text-primary-foreground/90">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-white hover:bg-white/90 text-primary text-sm md:text-base py-2 h-auto group">
              今すぐ始める
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >→</motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-8px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
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
                    <Check className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm md:text-base py-2 h-auto group">
              お問い合わせ
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >→</motion.span>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* よくある質問 */}
        <motion.div
          className="mt-16 md:mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">よくある質問</h3>
          <div className="space-y-4">
            {[
              {
                question: "無料プランでも音声変換は使えますか？",
                answer: "はい、無料プランでも月に10分間の音声変換をご利用いただけます。定期的に使用される場合はスタンダードプランへのアップグレードをおすすめします。"
              },
              {
                question: "プランはいつでも変更できますか？",
                answer: "はい、いつでもプランを変更いただけます。アップグレードは即時反映され、ダウングレードは現在の支払い期間が終了すると反映されます。"
              },
              {
                question: "複数のデバイスで利用できますか？",
                answer: "はい、iPhoneとiPad間でデータは同期され、どちらのデバイスからでもアクセスいただけます。Webブラウザからのアクセスもスタンダードプラン以上でご利用可能です。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <h4 className="text-base md:text-lg font-semibold mb-2">{item.question}</h4>
                <p className="text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
