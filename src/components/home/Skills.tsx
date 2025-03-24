
import Section from '../ui/Section';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Design
  { name: 'UI/UX Design', level: 90, category: 'design' },
  { name: 'Figma', level: 95, category: 'design' },
  { name: 'Adobe XD', level: 85, category: 'design' },
  { name: 'Photoshop', level: 80, category: 'design' },
  
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'API Design', level: 80, category: 'backend' },
  { name: 'SQL', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-800 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: '100ms' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'design', name: 'Design' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <Section id="skills" className="bg-white">
      <div ref={sectionRef} className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={cn(
              "inline-block pb-1 opacity-0 transition-all duration-700",
              isVisible && "opacity-100"
            )}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 pb-1">
              Compétences
            </span>
          </div>
          
          <h2 
            className={cn(
              "heading-lg text-gray-900 opacity-0 transition-all duration-700 delay-100",
              isVisible && "opacity-100"
            )}
          >
            Expertise Technique
          </h2>
          
          <p
            className={cn(
              "text-gray-600 text-balance opacity-0 transition-all duration-700 delay-200",
              isVisible && "opacity-100"
            )}
          >
            Un aperçu des compétences techniques que j'ai développées au cours de ma carrière
            et que j'utilise quotidiennement dans mes projets.
          </p>
        </div>
        
        <div
          className={cn(
            "flex justify-center space-x-2 opacity-0 transition-all duration-700 delay-300",
            isVisible && "opacity-100"
          )}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeCategory === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 transition-all duration-700 delay-500",
            isVisible && "opacity-100"
          )}
        >
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              className={cn(
                "transition-all duration-500",
                isVisible ? "opacity-100" : "opacity-0",
                isVisible && `delay-${100 * index}`
              )}
            >
              <SkillBar name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
