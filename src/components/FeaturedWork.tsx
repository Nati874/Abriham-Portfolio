import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Link } from 'wouter';

export default function FeaturedWork() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const contentRef = useScrollAnimation({ threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);

  const works = [
    {
      id: 1,
      type: 'video',
      title: 'Cinematic Video Editing',
      description: 'Dynamic commercial and promotional video editing. Showcasing expertise in narrative flow, sound integration, color grading, and visual storytelling that commands viewer attention.',
      year: '2024',
      videoUrl: '/videos/video project 1.mp4',
    },
    {
      id: 2,
      type: 'video',
      title: 'Creative Video Montage',
      description: 'A visually engaging montage video project that combines fast-paced editing, vibrant color grading, and seamless transitions to create an immersive viewing experience.',
      year: '2024',
      videoUrl: '/videos/video project 2.mp4',
    },
    {
      id: 3,
      type: 'cafe',
      title: 'Cafe Branding & Logos',
      description: "A series of warm, minimalist logo designs developed for boutique coffee shops. Focused on clean typography and cozy visual symbols that define a cafe's personality.",
      year: '2024',
      images: [
        '/pictures/cafe logo 1.png',
        '/pictures/cafe logo 2.png',
        '/pictures/cafe logo 3.png',
        '/pictures/cafe logo 4.png',
      ],
    },
    {
      id: 4,
      type: 'hoya_hoye',
      title: 'Hoya Hoye Social Platform',
      description: 'Brand logo designs and visual assets for the social platform Hoya Hoye. Crafted dynamic branding elements that reflect connectivity, modern communication, and media integration.',
      year: '2024 - 2025',
      images: [
        '/pictures/hoya hoye logo 1.jpg',
        '/pictures/hoya hoye logo 2.jpg',
        '/pictures/hoya hoye brand.png',
      ],
    },
    {
      id: 5,
      type: 'restaurant',
      title: 'Restaurant Visual Poster',
      description: 'A premium visual poster design for a high-end restaurant concept, combining elegant graphics, color harmony, and appetizing layouts to captivate food lovers.',
      year: '2024',
      image: '/pictures/restaurant poster.png',
    },
    {
      id: 6,
      type: 'youtube',
      title: 'YouTube Thumbnail Portfolio',
      description: 'High-conversion, custom YouTube thumbnails designed to boost CTR. Combining expressive photography, bold text layouts, and color contrast to drive audience curiosity.',
      year: '2024',
      coverImage: '/pictures/yt thumbnail 1.jpg',
    },
  ];

  const currentWork = works[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const renderMedia = (work: typeof works[0]) => {
    switch (work.type) {
      case 'cafe':
        return (
          <div className="grid grid-cols-2 gap-4 w-full h-full p-4 bg-secondary/35 border border-border/50">
            {work.images?.map((img, i) => (
              <div key={i} className="bg-background flex items-center justify-center p-3 border border-border/40 hover:border-accent/60 transition-all duration-300 shadow-sm hover:shadow-md">
                <img src={img} alt={`Cafe logo ${i + 1}`} className="max-h-36 max-w-full object-contain" />
              </div>
            ))}
          </div>
        );
      case 'hoya_hoye':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full p-4 bg-secondary/35 border border-border/50 items-center justify-center">
            <div className="col-span-1 flex items-center justify-center bg-background p-3 border border-border/40 h-40 shadow-sm hover:border-accent/60 transition-colors">
              <img src={work.images?.[0]} alt="Hoya Hoye Logo 1" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="col-span-1 flex items-center justify-center bg-background p-3 border border-border/40 h-40 shadow-sm hover:border-accent/60 transition-colors">
              <img src={work.images?.[1]} alt="Hoya Hoye Logo 2" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="col-span-1 flex items-center justify-center bg-background p-3 border border-border/40 h-40 shadow-sm hover:border-accent/60 transition-colors">
              <img src={work.images?.[2]} alt="Hoya Hoye Brand" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        );
      case 'restaurant':
        return (
          <div className="w-full h-full bg-secondary/35 border border-border/50 flex items-center justify-center overflow-hidden p-2">
            <img src={work.image} alt={work.title} className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105 shadow-sm" />
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-full bg-black/90 border border-border/50 relative flex items-center justify-center overflow-hidden">
            <video 
              src={work.videoUrl} 
              controls 
              className="w-full h-full object-contain"
              poster="/pictures/home page picture.jpg"
            />
          </div>
        );
      case 'youtube':
        return (
          <div className="w-full h-full relative group overflow-hidden bg-black flex items-center justify-center border border-border/50">
            <img 
              src={work.coverImage} 
              alt="YouTube Thumbnails Preview" 
              className="w-full h-full object-cover blur-xs opacity-75 scale-100 group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center z-10">
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">Click below to view full gallery</span>
              <Link href="/youtube-thumbnails">
                <span className="px-8 py-3 bg-accent text-accent-foreground font-bold text-sm tracking-wider uppercase hover:bg-accent/90 active:scale-95 transition-all shadow-lg cursor-pointer">
                  Youtube thumbnails
                </span>
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
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
          <div ref={contentRef} className="scroll-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Alternating layout: image left/right */}
              {activeIndex % 2 === 0 ? (
                <>
                  {/* Image/Media Left */}
                  <div className="relative">
                    <div className="w-full h-[400px] bg-secondary shadow-lg overflow-hidden flex items-center justify-center">
                      {renderMedia(currentWork)}
                    </div>
                    {/* Numbered badge - top right corner */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold shadow-lg z-25">
                      {String(currentWork.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Right */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-foreground">{currentWork.title}</h3>
                    <p className="text-foreground/75 leading-relaxed text-lg">
                      {currentWork.description}
                    </p>
                    <p className="text-accent font-semibold text-lg">{currentWork.year}</p>
                    {currentWork.type === 'youtube' && (
                      <div className="pt-2">
                        <Link href="/youtube-thumbnails">
                          <span className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95 cursor-pointer">
                            Youtube thumbnails
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Content Left */}
                  <div className="space-y-6 order-2 md:order-1">
                    <h3 className="text-3xl font-bold text-foreground">{currentWork.title}</h3>
                    <p className="text-foreground/75 leading-relaxed text-lg">
                      {currentWork.description}
                    </p>
                    <p className="text-accent font-semibold text-lg">{currentWork.year}</p>
                    {currentWork.type === 'youtube' && (
                      <div className="pt-2">
                        <Link href="/youtube-thumbnails">
                          <span className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95 cursor-pointer">
                            Youtube thumbnails
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Image/Media Right */}
                  <div className="relative order-1 md:order-2">
                    <div className="w-full h-[400px] bg-secondary shadow-lg overflow-hidden flex items-center justify-center">
                      {renderMedia(currentWork)}
                    </div>
                    {/* Numbered badge - bottom left corner */}
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold shadow-lg z-25">
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
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all active:scale-95 shadow-md hover:shadow-lg"
              aria-label="Previous work"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all active:scale-95 shadow-md hover:shadow-lg"
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
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === activeIndex ? 'bg-accent w-8' : 'bg-muted hover:bg-muted-foreground/30'
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
