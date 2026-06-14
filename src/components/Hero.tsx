import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const ref = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="home" className="pt-32 pb-24 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-80 bg-secondary shadow-lg group">
              <div className="absolute inset-0 border-2 border-accent/40 -translate-x-4 translate-y-4 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-300" />
              <div className="w-full h-full overflow-hidden relative z-10">
                <img 
                  src="/pictures/home page picture.jpg" 
                  alt="Abriham Edmealem" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105" 
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div ref={ref} className="scroll-fade-in order-1 md:order-2">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Hi I am</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-foreground block">Abriham</span>
              <span className="text-accent block">Edmealem</span>
            </h1>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed max-w-md">
              Video Editor & Graphic Designer crafting compelling visual stories through motion and design
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
