import React from 'react';
import { Pencil, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Pencil className="h-5 w-5 text-primary" />
              <span className="font-bold text-xl">しゃべるノート</span>
            </div>
            <p className="text-slate-600 mb-8">
              書いて覚える。聞いて定着する。<br />
              新しい記憶の定着方法。
            </p>
            <div className="flex space-x-4">
              <a href="https://mynote-psi-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://mynote-psi-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://mynote-psi-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://mynote-psi-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Youtube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6">製品</h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-slate-600 hover:text-primary transition-colors">
                  機能
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-primary transition-colors">
                  β版について
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-primary transition-colors">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>
            
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6">会社情報</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://jikkenpro.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  私たちについて
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  利用規約
                </a>
              </li>
            </ul>
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
