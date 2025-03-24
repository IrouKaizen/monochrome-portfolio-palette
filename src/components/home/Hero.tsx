
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div 
            className={cn(
              "opacity-0 transition-all duration-700 delay-300",
              isVisible && "opacity-100"
            )}
          >
            <span className="inline-block py-1 px-3 text-xs border border-gray-800 rounded-full uppercase tracking-wide mb-4">
              Portfolio Personnel
            </span>
          </div>
          
          <h1 
            className={cn(
              "heading-xl opacity-0 transition-all duration-700 delay-700",
              isVisible && "opacity-100"
            )}
          >
            <span className="text-black">Créateur</span>{" "}
            <span className="relative">
              <span className="relative inline-block text-gray-800">
                Passionné
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gray-200 opacity-20 hidden sm:block"></span>
            </span>
          </h1>
          
          <p 
            className={cn(
              "text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto opacity-0 transition-all duration-700 delay-1000 text-balance",
              isVisible && "opacity-100"
            )}
          >
            Je conçois et développe des expériences numériques élégantes, 
            centrées sur l'utilisateur et attentives aux moindres détails.
          </p>
          
          <div 
            className={cn(
              "pt-4 opacity-0 transition-all duration-700 delay-1300",
              isVisible && "opacity-100"
            )}
          >
            <a 
              href="#about"
              className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transform transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-none"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 animate-pulse-slow"
      >
        <span className="mb-2">Défiler</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
