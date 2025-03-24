
import Section from '../ui/Section';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    // For now we'll just reset the form
    setFormData({ name: '', email: '', message: '' });
    alert('Message envoyé ! (simulation)');
  };
  
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
    <Section id="contact" className="bg-gray-50">
      <div ref={sectionRef} className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={cn(
              "inline-block pb-1 opacity-0 transition-all duration-700",
              isVisible && "opacity-100"
            )}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 pb-1">
              Contact
            </span>
          </div>
          
          <h2 
            className={cn(
              "heading-lg text-gray-900 opacity-0 transition-all duration-700 delay-100",
              isVisible && "opacity-100"
            )}
          >
            Discutons de votre projet
          </h2>
          
          <p
            className={cn(
              "text-gray-600 text-balance opacity-0 transition-all duration-700 delay-200",
              isVisible && "opacity-100"
            )}
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            Je serai ravi de vous aider à le concrétiser.
          </p>
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 lg:grid-cols-5 gap-12 opacity-0 transform translate-y-10 transition-all duration-1000 delay-300",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full shrink-0">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full shrink-0">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                  <p className="text-gray-600 mt-1">+33 6 00 00 00 00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full shrink-0">
                  <MapPin className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Localisation</h3>
                  <p className="text-gray-600 mt-1">Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm13.5 12.3h-3v-5.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v5.7h-3v-11h2.9v1.3h.1c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5v6.7z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.8-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.2-3.3-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4.1-6.6-5.3-12-11.9-12z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a10.025 10.025 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
                  >
                    <span>Envoyer le message</span>
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
