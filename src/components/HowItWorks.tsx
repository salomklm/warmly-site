import React, { useEffect, useRef } from 'react';

const steps = [
  {
    title: "Soulagement Ciblé",
    description: "Des filaments chauffants en fibre de carbone sont intégrés au tissu et diffusent une chaleur douce sur le ventre et le bas du dos."
  },
  {
    title: "Température Ajustable",
    description: "Trois niveaux de chaleur réglables vous permettent de choisir le confort qui vous convient, d'une simple pression sur le bouton discret intégré."
  },
  {
    title: "Confort Nomade",
    description: "Profitez de 4 heures de confort continu, où que vous soyez — au bureau, en déplacement ou à la maison."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Optimized IntersectionObserver for reveal effects
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('reveal-visible'));
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

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="m-0 pt-24 pb-24 bg-[#bf897e]/10 reveal-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#642315] mb-6">
            Comment fonctionne la culotte chauffante ?
          </h2>
          <p className="text-lg text-gray-700">
            Une technologie innovante alliée à un design élégant pour soulager efficacement la douleur tout en assurant un confort optimal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#642315] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;