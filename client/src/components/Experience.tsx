import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Film } from 'lucide-react';

export default function Experience() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });

  const experiences = [
    {
      id: 1,
      title: 'Co-founder, Video Editor & Content Manager',
      company: 'Hoya Hoye',
      period: '2024 - September 2025',
      description: "We co-founded a social media platform called HoyaHoy. My role involved serving as a Video Editor and Content Manager, where I was responsible for creating engaging video content, managing media assets, and helping oversee the platform's content strategy.",
      image: '/pictures/hoya hoye logo 1.jpg',
    },
    {
      id: 2,
      title: 'Filmmaking Trainee',
      company: 'Bahir Dar University filmmaking traineeship',
      period: 'Summer 2024',
      description: "During the summer, I attended a filmmaking program at Bahir Dar University. It was a great experience that helped me learn important skills such as camera movement, storytelling, and color grading. Through practical activities and creative projects, I gained a better understanding of how films are made and how visual elements work together to tell a story. This experience improved my technical skills and increased my passion for filmmaking and visual storytelling.",
      icon: Film,
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div ref={titleRef} className="scroll-fade-in mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
            <span className="text-foreground block">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => {
            const contentRef = useScrollAnimation({ threshold: 0.2, delay: index * 150 });
            const Icon = exp.icon;

            return (
              <div
                key={exp.id}
                ref={contentRef}
                className="scroll-slide-left group flex flex-col justify-between h-full bg-secondary/10 border border-border/60 hover:border-accent p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  {/* Visual representation */}
                  <div className="mb-6 h-64 bg-secondary shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 relative">
                    {exp.image ? (
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex flex-col items-center justify-center gap-4">
                        {Icon && <Icon className="w-12 h-12 text-accent" />}
                        <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider text-center px-4">{exp.company}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground leading-snug">{exp.title}</h3>
                    <p className="text-accent font-semibold text-base">{exp.company}</p>
                    <p className="text-muted-foreground text-sm font-medium">{exp.period}</p>
                    <p className="text-foreground/75 text-sm leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
