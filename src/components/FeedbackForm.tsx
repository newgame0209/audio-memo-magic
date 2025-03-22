
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const FeedbackForm = () => {
  return (
    <section id="feedback" className="py-8 md:py-12 px-4 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-1">あなたの声をお聞かせください</h2>
            <p className="text-xs md:text-sm text-slate-600">
              製品の改善やご要望など、フィードバックをお寄せください。より良いサービスのために活用させていただきます。
            </p>
          </div>
          
          <form className="space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  お名前
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="山田 太郎"
                  className="h-9 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                  メールアドレス
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="h-9 text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1">
                件名
              </label>
              <Input
                type="text"
                id="subject"
                placeholder="ご意見・ご感想について"
                className="h-9 text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-xs font-medium text-slate-700 mb-1">
                フィードバック内容
              </label>
              <Textarea
                id="feedback"
                rows={4}
                placeholder="ご意見やご感想をお聞かせください"
                className="resize-none text-sm"
              />
            </div>
            
            <div className="pt-1">
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-1.5 rounded-md transition-colors text-sm h-9"
              >
                送信する
              </Button>
              <p className="mt-1 text-xs text-slate-500 text-center md:text-left">
                ※いただいたフィードバックは今後のサービス改善に活用させていただきます
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackForm;
