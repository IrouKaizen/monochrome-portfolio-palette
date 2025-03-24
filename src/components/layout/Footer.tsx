
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">PORTFOLIO</h3>
            <p className="max-w-md text-primary-foreground/80 text-sm">
              Un portfolio élégant et minimaliste mettant en valeur mon travail
              et mes compétences dans un design épuré en noir et blanc.
            </p>
          </div>
          
          <div className="space-y-6 md:text-right">
            <h3 className="text-lg font-semibold">Restons connectés</h3>
            <div className="flex space-x-4 md:justify-end">
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
