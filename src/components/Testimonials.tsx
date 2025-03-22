import React, { useState } from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

// テスティモニアルデータを強化し、カテゴリを追加
const testimonialsByCategory = {
  students: [
    {
      name: "佐藤 健太",
      title: "大学生・医学部",
      quote: "膨大な医学書の内容を記憶するのに苦労していましたが、しゃべるノートのおかげで電車の中でも復習できるようになりました。視覚と聴覚の両方で学ぶことで記憶の定着率が格段に上がったと実感しています。",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      usage: "使用期間: 6ヶ月",
      result: "成果: 試験成績が平均15%アップ"
    },
    {
      name: "山本 裕子",
      title: "高校生・受験生",
      quote: "英単語の暗記が苦手でしたが、しゃべるノートで書いた単語を通学中に聴くことで、効率よく覚えられるようになりました。発音も一緒に学べるのが良いです。",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      usage: "使用期間: 3ヶ月",
      result: "成果: 英語の単語テストで満点を取れるように"
    }
  ],
  business: [
    {
      name: "田中 美咲",
      title: "会社員・マーケティング",
      quote: "会議のメモを録りながら、重要ポイントを後で聞き返せるのが非常に便利です。長文の企画書も音声で聞けるので、通勤時間を有効活用できるようになりました。",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      usage: "使用期間: 1年",
      result: "成果: 会議の記憶定着率が向上"
    },
    {
      name: "中村 拓也",
      title: "起業家・IT企業",
      quote: "アイデアが浮かんだ時にすぐメモして、後で音声で聞くことでさらに発想が広がります。チーム全体でこのアプリを使うようになり、情報共有がスムーズになりました。",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      usage: "使用期間: 8ヶ月",
      result: "成果: チームの生産性が20%向上"
    }
  ],
  education: [
    {
      name: "鈴木 大輔",
      title: "高校教師",
      quote: "授業の準備をしながらメモした内容を音声で確認できるので、効率良く教材が作れます。生徒にもこのアプリを紹介したところ、学習効率が上がったと好評です。",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      usage: "使用期間: 1年2ヶ月",
      result: "成果: 生徒の理解度が平均15%向上"
    },
    {
      name: "伊藤 さくら",
      title: "小学校教員",
      quote: "児童への指導計画や個別のフィードバックをメモしておき、帰りの会の前に聞き返して確認しています。記憶が新鮮なうちに書いて、必要な時に聞けるのが素晴らしいです。",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      usage: "使用期間: 9ヶ月",
      result: "成果: 児童の個別指導の質が向上"
    }
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Testimonials = () => {
  const [category, setCategory] = useState<keyof typeof testimonialsByCategory>("students");
  const testimonials = testimonialsByCategory[category];

  // 統計データ
  const stats = {
    users: "10,000+",
    universities: "50+",
    companies: "200+",
    satisfaction: "98%"
  };

  return (
    <section id="testimonials" className="py-10 md:py-20 px-4 md:px-12 relative">
      {/* アクセシビリティのための非表示ヘッダー */}
      <h2 className="sr-only">ユーザーの声と利用統計</h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            ユーザーの声
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            しゃべるノートを活用している方々からの声をご紹介します
          </p>
        </div>
        
        {/* 統計データ表示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
          {Object.entries(stats).map(([key, value], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-4 rounded-xl border border-primary/20"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
              <p className="text-xs md:text-sm text-slate-600 capitalize">
                {key === "users" ? "ユーザー数" : 
                 key === "universities" ? "導入大学" : 
                 key === "companies" ? "導入企業" : 
                 "顧客満足度"}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* カテゴリタブ */}
        <Tabs defaultValue="students" value={category} onValueChange={(value) => setCategory(value as keyof typeof testimonialsByCategory)} className="mb-8">
          <TabsList className="mx-auto flex justify-center mb-6 p-1 bg-secondary">
            <TabsTrigger value="students" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">学生</TabsTrigger>
            <TabsTrigger value="business" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">ビジネス</TabsTrigger>
            <TabsTrigger value="education" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">教育者</TabsTrigger>
          </TabsList>
          
          {Object.keys(testimonialsByCategory).map((cat) => (
            <TabsContent key={cat} value={cat} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {testimonialsByCategory[cat as keyof typeof testimonialsByCategory].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <motion.div 
                          className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-auto cursor-pointer
                                  transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:bg-primary/5"
                          whileHover={{ scale: 1.03, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center mb-2 md:mb-3">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="h-8 w-8 md:h-10 md:w-10 rounded-full mr-3 border-2 border-primary/20"
                            />
                            <div>
                              <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                              <p className="text-xs text-slate-500">{testimonial.title}</p>
                            </div>
                          </div>
                          <blockquote className="text-xs md:text-sm text-slate-600 italic line-clamp-5 md:line-clamp-none">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          {/* 追加情報 */}
                          <div className="mt-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                            <p>{testimonial.usage}</p>
                            <p className="text-emerald-600 font-medium">{testimonial.result}</p>
                          </div>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-0 bg-primary/95 text-white border-primary shadow-lg">
                        <div className="p-4">
                          <div className="flex items-center mb-3">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="h-12 w-12 rounded-full mr-3 border-2 border-white/30"
                            />
                            <div>
                              <h4 className="font-bold text-base">{testimonial.name}</h4>
                              <p className="text-xs text-white/80">{testimonial.title}</p>
                            </div>
                          </div>
                          <blockquote className="text-sm italic border-l-2 border-white/30 pl-3">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="mt-3 pt-2 border-t border-white/20 text-xs">
                            <p className="text-white/80">{testimonial.usage}</p>
                            <p className="text-white font-medium">{testimonial.result}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
