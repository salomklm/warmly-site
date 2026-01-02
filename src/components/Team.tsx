import React, { useEffect, useRef } from 'react';

const team = [
  {
    name: "Salomé",
    role: "Fondatrice",
    subtitle: "La vision",
    bio: "Comme beaucoup, j'ai trop souvent été freinée par mes règles. J'ai décidé de créer une solution qui libère enfin les femmes de cette douleur invisible. Warmly est plus qu'un produit : c'est un pas vers plus de confort et de liberté."
  },
  {
    name: "Dr. Muller",
    role: "Gynécologue",
    subtitle: "L'expertise médicale",
    bio: "Gynécologue spécialisée dans les douleurs pelviennes chroniques, Dr. Muller apporte son expertise sur les applications efficaces de la thermothérapie."
  },
  {
    name: "Thomas",
    role: "Ingénieur",
    subtitle: "L'innovation tech",
    bio: "Fort d'une expérience dans la technologie portable, Thomas dirige le développement de nos éléments chauffants innovants et des systèmes de contrôle."
  }
];

const Team = () => {
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
      id="equipe" 
      ref={sectionRef}
      className="py-24 bg-[#e0b6ae]/10 reveal-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#642315] mb-6">
            Notre Équipe
          </h2>
          <p className="text-lg text-gray-700">
            Les personnes passionnées derrière la mission de Warmly d'améliorer le confort et la qualité de vie des femmes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-[#642315] mb-1">
                {member.name}
              </h3>
              <p className="text-[#642315]/70 font-medium mb-1">
                {member.role}
              </p>
              <p className="text-[#642315] font-semibold italic mb-3">
                {member.subtitle}
              </p>
              <p className="text-gray-700">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;