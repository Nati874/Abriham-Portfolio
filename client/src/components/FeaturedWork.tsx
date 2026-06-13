import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export default function FeaturedWork() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const works = [
    {
      id: 1,
      title: 'Brand Identity Design',
      description: 'Complete visual branding package for emerging tech startup including logo design, color palette, typography system, and brand guidelines.',
      year: '2023',
    },
    {
      id: 2,
      title: 'Commercial Video Production',
      description: 'High-impact promotional video for luxury lifestyle brand with cinematic shots, color grading, and professional sound design.',
      year: '2023',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Integrated design and video content for multi-platform launch across Instagram, TikTok, and YouTube with consistent branding.',
      year: '2023',
    },
  ];

  const currentWork = works[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <section id="work" className="py-24 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div ref={titleRef} className="scroll-fade-in mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
            <span className="text-foreground block">Featured</span>
            <span className="text-accent block">Work</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Work Item */}
          <div className="scroll-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Alternating layout: image left/right */}
              {activeIndex % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div className="relative">
                    <div className="w-full h-96 bg-secondary shadow-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Work {currentWork.id}</span>
                      </div>
                    </div>
                    {/* Numbered badge - top right corner */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {String(currentWork.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Right */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{currentWork.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {currentWork.description}
                    </p>
                    <p className="text-accent font-semibold text-lg">{currentWork.year}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Content Left */}
                  <div className="space-y-6 order-2 md:order-1">
                    <h3 className="text-3xl font-bold">{currentWork.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {currentWork.description}
                    </p>
                    <p className="text-accent font-semibold text-lg">{currentWork.year}</p>
                  </div>

                  {/* Image Right */}
                  <div className="relative order-1 md:order-2">
                    <div className="w-full h-96 bg-secondary shadow-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Work {currentWork.id}</span>
                      </div>
                    </div>
                    {/* Numbered badge - bottom left corner */}
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {String(currentWork.id).padStart(2, '0')}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all active:scale-95"
              aria-label="Previous work"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all active:scale-95"
              aria-label="Next work"
            >
              Next →
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-accent w-8' : 'bg-muted'
                }`}
                aria-label={`Go to work ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
