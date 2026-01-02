import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  button?: {
    text: string;
    link: string;
  };
}

const faqs: FAQItem[] = [
  {
    question: "Quelle est l'autonomie de la batterie ?",
    answer: "La culotte Warmly garantit un confort optimal toute la journée grâce à sa batterie offrant jusqu'à **4 heures d'autonomie**. Note : l'autonomie peut varier en fonction du niveau de chaleur sélectionné."
  },
  {
    question: "Comment s'utilise la culotte ?",
    answer: "Notre culotte Warmly a été conçue pour soulager vos douleurs menstruelles tout en restant aussi simple à utiliser qu'un sous-vêtement classique.\nEnfilez d'abord votre culotte habituelle, puis la culotte Warmly par-dessus. Branchez la batterie au câble situé dans la petite poche intérieure, refermez la fermeture éclair, puis appuyez sur le bouton ON/OFF pour activer la chaleur.\nIl ne vous reste plus qu'à enfiler le reste de votre tenue et profiter d'une sensation de confort immédiat."
  },
  {
    question: "Comment laver la culotte Warmly ?",
    answer: "La culotte chauffante est conçue pour un entretien facile. Elle est lavable **en machine à 30 degrés**. Pensez simplement à **retirer la batterie et fermer la poche avant le lavage**. Nous recommandons le séchage à l'air libre pour maintenir la forme et la qualité du tissu plus longtemps."
  },
  {
    question: "Est-ce que la culotte chauffante peut être portée toute la journée ?",
    answer: "Oui, la culotte Warmly est conçue pour être portée confortablement toute la journée. Son design discret et ses matériaux doux permettent un port prolongé sans gêne. Vous pouvez la porter chez vous, au travail, à l'école, au sport, etc."
  },
  {
    question: "Comment retourner mon article ?",
    answer: "Si vous souhaitez retourner un article, merci de contacter notre service client à contact@warmly.fr dans un délai de 14 jours après réception de votre commande, en indiquant votre numéro de commande.\n\nWarmly peut, sur demande, vous fournir une étiquette de retour afin de vous simplifier la démarche.\nLe coût de cette étiquette sera alors déduit du montant remboursé.\n\nLes articles doivent être non portés, non lavés et dans leur état d'origine."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatText = (text: string) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    }).map((part, index) => {
      if (typeof part === 'string') {
        return part.split('\n').map((line, lineIndex) => (
          <React.Fragment key={`${index}-${lineIndex}`}>
            {line}
            {lineIndex < part.split('\n').length - 1 && <br />}
          </React.Fragment>
        ));
      }
      return part;
    });
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-24 bg-[#e0b6ae]/10 reveal-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#642315] mb-6">
            Questions Fréquentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-[#e0b6ae]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="py-6"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-semibold text-[#642315]">
                  {faq.question}
                </h3>
                <span className="text-[#642315] ml-4 flex-shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`mt-3 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700">
                  {formatText(faq.answer)}
                </p>
                {faq.button && (
                  <div className="mt-6 flex justify-center">
                    <a
                      href={faq.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#642315] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a1a10] transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      {faq.button.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;