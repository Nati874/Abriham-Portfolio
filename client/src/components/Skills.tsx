import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Film, Scissors, Palette, Video } from 'lucide-react';

export default function Skills() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });

  const skillCategories = [
    {
      category: 'Video Editing',
      icon: Scissors,
      skills: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapeCut', 'Clip Champ'],
    },
    {
      category: 'Graphic Design',
      icon: Palette,
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma'],
    },
    {
      category: 'Filmmaking',
      icon: Film,
      skills: ['Cinematography', 'Color Grading', 'Motion Graphics', 'Sound Design'],
    },
    {
      category: 'Motion & Animation',
      icon: Video,
      skills: ['After Effects', 'Keyframe Animation', 'Transitions', 'Visual Effects'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div ref={titleRef} className="scroll-fade-in mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
            <span className="text-foreground block">Skills &</span>
            <span className="text-accent block">Tools</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const contentRef = useScrollAnimation({ threshold: 0.3, delay: index * 100 });

            return (
              <div
                key={category.category}
                ref={contentRef}
                className="scroll-fade-in p-6 bg-background border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-accent/10 rounded">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/70 flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
