import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });

  const experiences = [
    {
      id: 1,
      title: 'Senior Video Editor',
      company: 'Creative Studios',
      period: '2022 - Present',
      description: 'Leading video production and editing for commercial clients',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Designed visual assets for web and print media',
    },
    {
      id: 3,
      title: 'Freelance Creator',
      company: 'Self-employed',
      period: '2020 - 2021',
      description: 'Provided video editing and design services to diverse clients',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const contentRef = useScrollAnimation({ threshold: 0.2, delay: index * 150 });

            return (
              <div
                key={exp.id}
                ref={contentRef}
                className="scroll-slide-left group"
              >
                {/* Visual representation */}
                <div className="mb-6 h-64 bg-secondary shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Experience {exp.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
