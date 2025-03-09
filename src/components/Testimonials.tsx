
import React from 'react';

const testimonials = [
  {
    name: "佐藤 健太",
    title: "大学生・医学部",
    quote: "膨大な医学書の内容を記憶するのに苦労していましたが、しゃべるノートのおかげで電車の中でも復習できるようになりました。視覚と聴覚の両方で学ぶことで記憶の定着率が格段に上がったと実感しています。",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "田中 美咲",
    title: "会社員・マーケティング",
    quote: "会議のメモを録りながら、重要ポイントを後で聞き返せるのが非常に便利です。長文の企画書も音声で聞けるので、通勤時間を有効活用できるようになりました。",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "鈴木 大輔",
    title: "高校教師",
    quote: "授業の準備をしながらメモした内容を音声で確認できるので、効率良く教材が作れます。生徒にもこのアプリを紹介したところ、学習効率が上がったと好評です。",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ユーザーの声
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            しゃべるノートを活用している方々からの声をご紹介します
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
