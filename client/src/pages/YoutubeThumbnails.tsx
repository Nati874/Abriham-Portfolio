import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function YoutubeThumbnails() {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const thumbnails = [
    {
      id: 1,
      src: '/pictures/yt thumbnail 1.jpg',
      alt: 'YouTube Thumbnail Design 1',
      title: 'High-Impact Drama & Contrast',
      desc: 'Bold character staging, high-contrast lighting, and dramatic color grading designed to capture immediate attention.'
    },
    {
      id: 2,
      src: '/pictures/yt thumbnail 2.jpg',
      alt: 'YouTube Thumbnail Design 2',
      title: 'Action & Kinetic Focus',
      desc: 'Combining subject-motion cues, glowing outlines, and energetic typography to drive action and high click-through rates.'
    },
    {
      id: 3,
      src: '/pictures/yt thumbnail 3.jpg',
      alt: 'YouTube Thumbnail Design 3',
      title: 'Clarity & Compositional Balance',
      desc: 'Clean subject isolation, vivid warm-gold highlights, and uncluttered background composition for maximum legibility.'
    },
    {
      id: 4,
      src: '/pictures/yt thumbnail 4.jpg',
      alt: 'YouTube Thumbnail Design 4',
      title: 'Narrative Storytelling Hook',
      desc: 'Staging curiosity-inducing scenes that leave a question unanswered, prompting viewers to click and watch.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors group cursor-pointer">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-foreground">YouTube</span>
            <span className="text-accent block">Thumbnails</span>
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
            A curated showcase of high-CTR custom YouTube thumbnails. Every layout is engineered with optimal composition, expressive color contrast, and dramatic subject focus to capture interest and drive click-through performance.
          </p>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {thumbnails.map((thumb) => (
            <div 
              key={thumb.id}
              className="group bg-secondary/15 border border-border/60 hover:border-accent p-4 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="overflow-hidden relative aspect-video bg-black/10 border border-border/30 mb-6">
                <img 
                  src={thumb.src} 
                  alt={thumb.alt}
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-all duration-500" 
                />
                {/* Hover decorative gold border overlay */}
                <div className="absolute inset-0 border-0 group-hover:border-2 border-accent/40 pointer-events-none transition-all duration-300" />
              </div>

              {/* Description */}
              <div className="space-y-2 px-2">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                  {thumb.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {thumb.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 pt-12 border-t border-border/40 text-center">
          <Link href="/#contact">
            <span className="inline-block px-10 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95 cursor-pointer">
              Let's Create Together
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
