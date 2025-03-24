
import Section from '../ui/Section';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
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
        threshold: 0.1,
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
    <Section id="about" className="bg-white">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div
            className={cn(
              "opacity-0 transform translate-y-10 transition-all duration-1000 delay-300",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-700 mix-blend-multiply opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-50 mix-blend-overlay opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gray-200 rounded-lg relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl font-light">
                    Photo portrait
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div
            className={cn(
              "space-y-6 opacity-0 transform translate-y-10 transition-all duration-1000",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <div className="inline-block pb-1 mb-4">
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 pb-1">
                À propos
              </span>
            </div>
            
            <h2 className="heading-lg text-gray-900">
              Alliant créativité et précision technique
            </h2>
            
            <p className="text-gray-700 text-balance leading-relaxed">
              Je suis un designer et développeur passionné par la création d'expériences numériques qui allient esthétique et fonctionnalité. Mon approche combine un sens aigu du design avec une expertise technique solide.
            </p>
            
            <p className="text-gray-700 text-balance leading-relaxed">
              Avec plusieurs années d'expérience dans le domaine, j'ai développé une méthodologie centrée sur l'utilisateur, attentive aux détails et axée sur l'élégance minimaliste. Je crois fermement que le meilleur design est celui qui passe inaperçu tout en étant parfaitement fonctionnel.
            </p>
            
            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center text-sm font-medium text-gray-900 border-b-2 border-gray-400 pb-1 hover:border-gray-900 transition-colors"
              >
                Voir mes travaux
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
