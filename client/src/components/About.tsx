import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MessageCircle, Send, Instagram } from 'lucide-react';

export default function About() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const contentRef = useScrollAnimation({ threshold: 0.3, delay: 100 });

  const contactLinks = [
    { 
      icon: Mail, 
      href: 'mailto:abriham@example.com', 
      label: 'Email', 
      color: 'hover:text-red-500',
      title: 'Send Email'
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
      href: 'https://t.me/Abrish32', 
      label: 'Telegram', 
      color: 'hover:text-blue-400',
      title: 'Telegram: @Abrish32'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      title: 'Instagram'
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
                I discovered my love for graphics and video editing through years of creative experimentation. My passion lies in transforming ideas into compelling visual narratives that engage and inspire audiences.
              </p>
              <p className="text-foreground/75 leading-relaxed text-lg">
                With expertise in industry-standard tools and a keen eye for detail, I bring projects to life with precision, creativity, and a commitment to excellence. Every frame tells a story.
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
            <div className="w-64 h-80 bg-secondary shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">About Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
