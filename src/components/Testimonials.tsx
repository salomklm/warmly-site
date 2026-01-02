import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Je la porte au travail sans que personne ne s'en doute — la chaleur est douce et tellement réconfortante.",
    name: "Olivia M.",
    role: "Enseignante",
    rating: 5
  },
  {
    quote: "J'oublie même que je la porte. Elle épouse parfaitement le corps et ne gêne pas du tout les mouvements.",
    name: "Camille D.",
    role: "Étudiante",
    rating: 5
  },
  {
    quote: "C'est la première fois que je me sens aussi bien pendant mes règles.",
    name: "Inès P.",
    role: "Graphiste",
    rating: 4
  },
  {
    quote: "Elle chauffe vite, tient plusieurs heures et se glisse facilement dans mon sac au besoin. Je ne peux plus m'en passer.",
    name: "Clara L.",
    role: "Infirmière",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Optimized IntersectionObserver for reveal effects
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-visible');
            setIsVisible(true);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    
    const section = sectionRef.current;
    if (section) {
      io.observe(section);
    }
    
    return () => {
      if (section) {
        io.unobserve(section);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      id="témoignages"
      ref={sectionRef}
      className="py-16 bg-[#bf897e]/10 reveal-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#642315] mb-6">
            Elles en parlent mieux que nous
          </h2>
          <p className="text-lg text-gray-700">
            Des témoignages de femmes testeuses qui ont retrouvé leur confort grâce à Warmly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Fixed height container to prevent CLS */}
          <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm testimonial-container relative shadow-lg">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} className="text-[#642315]" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} className="text-[#642315]" />
            </button>

            {/* Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out absolute inset-0 flex items-center px-12 md:px-20 py-12 md:py-12 ${
                  index === current
                    ? 'opacity-100 translate-x-0 z-10'
                    : index < current
                    ? 'opacity-0 -translate-x-full z-0'
                    : 'opacity-0 translate-x-full z-0'
                }`}
                style={{ display: index === current ? 'flex' : 'none' }}
              >
                <div className="w-full text-center">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl text-[#642315]">
                        {i < testimonial.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg italic text-gray-800 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-[#642315] text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    current === index ? 'bg-[#642315] w-6' : 'bg-[#bf897e] hover:bg-[#642315]/70'
                  }`}
                  aria-label={`Voir le témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Phrase de clôture */}
          <div className="text-center mt-12">
            <p className="text-lg text-[#642315] font-medium italic">
              Et si c'était à votre tour de redécouvrir vos journées sans douleur ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;