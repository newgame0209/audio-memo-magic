
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const FeedbackForm = () => {
  return (
    <section id="feedback" className="py-10 md:py-20 px-4 md:px-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">あなたの声をお聞かせください</h2>
            <p className="text-sm md:text-base text-slate-600">
              製品の改善やご要望など、フィードバックをお寄せください。より良いサービスのために活用させていただきます。
            </p>
          </div>
          
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  お名前
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  メールアドレス
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                件名
              </label>
              <Input
                type="text"
                id="subject"
                placeholder="ご意見・ご感想について"
              />
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-slate-700 mb-1">
                フィードバック内容
              </label>
              <Textarea
                id="feedback"
                rows={5}
                placeholder="ご意見やご感想をお聞かせください"
                className="resize-none"
              />
            </div>
            
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md transition-colors"
              >
                送信する
              </Button>
              <p className="mt-2 text-xs text-slate-500 text-center md:text-left">
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
