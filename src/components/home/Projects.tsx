
import Section from '../ui/Section';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Redesign Site E-commerce",
    category: "UX/UI Design",
    description: "Refonte complète de l'expérience utilisateur pour une plateforme de commerce en ligne, avec focus sur la simplification du parcours d'achat.",
    imagePlaceholder: "bg-gradient-to-br from-gray-100 to-gray-300",
  },
  {
    id: 2,
    title: "Application Mobile Fitness",
    category: "Développement Mobile",
    description: "Conception et développement d'une application de suivi d'entraînement avec visualisation des progrès en temps réel.",
    imagePlaceholder: "bg-gradient-to-tr from-gray-200 to-gray-400",
  },
  {
    id: 3,
    title: "Système de Design Entreprise",
    category: "Design System",
    description: "Création d'un système de design complet pour uniformiser l'identité visuelle sur l'ensemble des produits digitaux.",
    imagePlaceholder: "bg-gradient-to-bl from-gray-100 to-gray-300",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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

  return (
    <Section id="projects" className="bg-gray-50">
      <div ref={sectionRef} className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={cn(
              "inline-block pb-1 opacity-0 transition-all duration-700",
              isVisible && "opacity-100"
            )}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 pb-1">
              Projets
            </span>
          </div>
          
          <h2 
            className={cn(
              "heading-lg text-gray-900 opacity-0 transition-all duration-700 delay-100",
              isVisible && "opacity-100"
            )}
          >
            Sélection de travaux récents
          </h2>
          
          <p
            className={cn(
              "text-gray-600 text-balance opacity-0 transition-all duration-700 delay-200",
              isVisible && "opacity-100"
            )}
          >
            Découvrez une sélection de projets illustrant mon approche créative et technique,
            avec une attention particulière portée à l'expérience utilisateur et aux détails.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-10",
                isVisible && "opacity-100 translate-y-0 transition-all duration-700",
                isVisible && `delay-${300 + index * 100}`
              )}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={cn(
                  "w-full h-full absolute",
                  project.imagePlaceholder
                )}>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light">
                    Image du projet
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-medium text-gray-500 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm text-balance">
                  {project.description}
                </p>
                
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 group/link"
                  >
                    Voir le projet 
                    <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
