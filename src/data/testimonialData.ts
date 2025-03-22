
export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  usage: string;
  result: string;
}

export interface TestimonialCategories {
  students: Testimonial[];
  business: Testimonial[];
  education: Testimonial[];
  [key: string]: Testimonial[]; // This allows for string indexing
}

// テスティモニアルデータを強化し、カテゴリを追加
export const testimonialsByCategory: TestimonialCategories = {
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

// 統計データ
export const testimonialStats = {
  users: "10,000+",
  universities: "50+",
  companies: "200+",
  satisfaction: "98%"
};
