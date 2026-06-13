import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MessageCircle, Send, Instagram } from 'lucide-react';

export default function Contact() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const formRef = useScrollAnimation({ threshold: 0.3, delay: 100 });

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
    <section id="contact" className="py-24 px-4 md:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div ref={titleRef} className="scroll-fade-in mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
            <span className="text-foreground block">Get in</span>
            <span className="text-accent block">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="scroll-fade-in">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-12">
            {/* Direct Contact */}
            <div className="scroll-fade-in" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Email</p>
                  <a href="mailto:abriham@example.com" className="text-lg text-foreground hover:text-accent transition-colors">
                    abriham@example.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">WhatsApp</p>
                  <a href="https://wa.me/251962920449" className="text-lg text-foreground hover:text-accent transition-colors">
                    +251 96 292 0449
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Telegram</p>
                  <a href="https://t.me/Abrish32" className="text-lg text-foreground hover:text-accent transition-colors">
                    @Abrish32
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="scroll-fade-in" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-6">
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
                      <Icon size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
