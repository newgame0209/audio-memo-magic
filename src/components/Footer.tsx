
import React from 'react';
import { Pencil } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Pencil className="h-5 w-5 text-primary" />
              <span className="font-bold text-xl">しゃべるノート</span>
            </div>
            <p className="text-slate-600 mb-6">
              書いて覚える。聞いて定着する。<br />
              新しい記憶の定着方法。
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === 'twitter' && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {social === 'facebook' && (
                      <>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </>
                    )}
                    {social === 'instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                    {social === 'youtube' && (
                      <>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">製品</h4>
              <ul className="space-y-2">
                {['機能', '料金プラン', 'よくある質問', 'ダウンロード', 'ロードマップ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">リソース</h4>
              <ul className="space-y-2">
                {['ブログ', 'チュートリアル', 'ガイド', 'サポート', 'APIドキュメント'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">会社情報</h4>
              <ul className="space-y-2">
                {['私たちについて', 'チーム', '採用情報', 'プライバシーポリシー', '利用規約'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} しゃべるノート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
