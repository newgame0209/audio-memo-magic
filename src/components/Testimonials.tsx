
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TestimonialStats from './testimonials/TestimonialStats';
import TestimonialCategories from './testimonials/TestimonialCategories';
import { testimonialsByCategory, TestimonialCategories as TestimonialCategoriesType } from '@/data/testimonialData';

// Define string literal type for our categories to ensure type safety
type CategoryKey = 'students' | 'business' | 'education';

const Testimonials = () => {
  // Use the specific string literal type for state
  const [category, setCategory] = useState<CategoryKey>("students");

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
        <TestimonialStats />
        
        {/* カテゴリタブ */}
        <Tabs 
          defaultValue="students" 
          value={category} 
          onValueChange={(value) => setCategory(value as CategoryKey)} 
          className="mb-8"
        >
          <TabsList className="mx-auto flex justify-center mb-6 p-1 bg-secondary">
            <TabsTrigger value="students" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">学生</TabsTrigger>
            <TabsTrigger value="business" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">ビジネス</TabsTrigger>
            <TabsTrigger value="education" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">教育者</TabsTrigger>
          </TabsList>
          
          <TestimonialCategories category={category} />
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
