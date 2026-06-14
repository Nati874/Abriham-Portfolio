import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MessageCircle, Send, Instagram } from 'lucide-react';

export default function About() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const contentRef = useScrollAnimation({ threshold: 0.3, delay: 100 });

  const contactLinks = [
    { 
      icon: Mail, 
      href: 'mailto:Abrishedmealem23@gmail.com', 
      label: 'Email', 
      color: 'hover:text-red-500',
      title: 'Email: Abrishedmealem23@gmail.com'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/251962920449', 
      label: 'WhatsApp', 
      color: 'hover:text-green-500',
      title: 'WhatsApp: +251962920449'
    },
    { 
      icon: Send, 
      href: 'https://t.me/abrish32', 
      label: 'Telegram', 
      color: 'hover:text-blue-400',
      title: 'Telegram: @abrish32'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/abrish.23_', 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      title: 'Instagram: abrish.23_'
    },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div ref={titleRef} className="scroll-fade-in mb-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
                <span className="text-foreground block">About</span>
                <span className="text-accent block">me</span>
              </h2>
            </div>

            <div ref={contentRef} className="scroll-fade-in space-y-6">
              <p className="text-foreground/75 leading-relaxed text-lg">
                I am a professional Video Editor and Graphic Designer with 2 years of experience creating engaging, high-quality content that helps brands stand out online. I discovered my passion through creative experimentation, transforming ideas into compelling visual narratives.
              </p>
              <p className="text-foreground/75 leading-relaxed text-lg">
                I have worked with TikTok creators, dancers, influencers, and personal brands, delivering content tailored to capture attention and drive growth. My services span short-form videos (TikTok, Reels, Shorts), custom logo design, high-CTR YouTube thumbnails, posters, and business branding.
              </p>
              <p className="text-foreground/75 leading-relaxed text-lg">
                Additionally, my year of experience in Social Media Marketing enables me to blend strategy with creativity—understanding what performs well on social platforms and crafting visuals that truly connect.
              </p>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Connect With Me</p>
                <div className="flex gap-4">
                  {contactLinks.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        aria-label={contact.label}
                        title={contact.title}
                        className={`p-0 text-foreground transition-all hover:scale-110 ${contact.color}`}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-80 bg-secondary shadow-lg group">
              <div className="absolute inset-0 border-2 border-accent/40 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-300" />
              <div className="w-full h-full overflow-hidden relative z-10">
                <img 
                  src="/pictures/about me picture.jpg" 
                  alt="About Abriham" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
