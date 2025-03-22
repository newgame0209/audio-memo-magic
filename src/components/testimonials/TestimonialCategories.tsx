
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import TestimonialCard from './TestimonialCard';
import { testimonialsByCategory, TestimonialCategories as TestimonialCategoriesType } from '@/data/testimonialData';

interface TestimonialCategoriesProps {
  category: keyof TestimonialCategoriesType;
}

const TestimonialCategories = ({ category }: TestimonialCategoriesProps) => {
  return (
    <>
      {Object.keys(testimonialsByCategory).map((cat) => (
        <TabsContent 
          key={cat} 
          value={cat} 
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonialsByCategory[cat as keyof TestimonialCategoriesType].map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </>
  );
};

export default TestimonialCategories;
