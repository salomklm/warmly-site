import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[72px]">
      {/* Section Hero */}
      <section className="bg-[#fff9f6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#6b1d07] mb-6">
            NOTRE MISSION
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            Créer un vêtement chauffant qui soulage les douleurs menstruelles sans compromis sur le style ni le confort.
            Warmly est née d'un constat simple : les femmes méritent des solutions efficaces, belles et pensées pour leur corps.
          </p>
        </div>
      </section>

      {/* Section About Salomé */}
      <section className="bg-[#fff9f6] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Image (gauche en desktop, au-dessus en mobile) */}
          <div className="order-1 md:order-none flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_500/v1763561749/Untitled_design_mnocxa.jpg"
              srcSet="
                https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_400/v1763561749/Untitled_design_mnocxa.jpg 400w,
                https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_600/v1763561749/Untitled_design_mnocxa.jpg 600w,
                https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800/v1763561749/Untitled_design_mnocxa.jpg 800w"
              sizes="(max-width: 640px) 88vw, (max-width: 768px) 420px, (max-width: 1024px) 480px, 85%"
              alt="Salomé, fondatrice de Warmly"
             loading="lazy"
             decoding="async"
             width="500"
             height="667"
              className="rounded-2xl shadow-sm md:shadow-md w-[88%] max-w-[420px] sm:max-w-[480px] md:max-w-[85%] object-cover"
             style={{ height: 'auto', width: '100%' }}
            />
          </div>

          {/* Texte (droite en desktop, en dessous en mobile) */}
          <div className="order-2 md:order-none text-center md:text-left">
            <h2 className="text-[26px] leading-snug sm:text-[30px] md:text-4xl font-semibold text-[#6b1d07] mb-3 sm:mb-4">
              Je suis Salomé, fondatrice de Warmly.
            </h2>

            <p className="text-[15.5px] sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
              Comme beaucoup de femmes, j'ai souvent été freinée par mes douleurs menstruelles.
              Aucune solution ne me convenait vraiment. Alors j'ai décidé de créer ma propre solution.
            </p>

            <p className="text-[15.5px] sm:text-base text-slate-700 leading-relaxed mb-5 sm:mb-6">
              Je conçois, teste et développe chaque détail de Warmly.
              Ce projet est le fruit d'un long travail, d'essais, d'erreurs et de passion.
              Mon objectif : que chaque femme vive ses cycles avec plus de confort et de sérénité.
            </p>

            <Link
              to="/culotte-chauffante-menstruelle"
              className="inline-flex w-full sm:w-auto justify-center bg-[#6b1d07] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Découvrir la culotte chauffante
            </Link>
          </div>
        </div>
      </section>

      {/* Section "Pourquoi Warmly est différent" */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#6b1d07] mb-16">
              Ce qui rend Warmly unique
            </h2>
            
            <div className="mx-auto max-w-6xl px-4 lg:px-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                {/* Colonne 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-semibold text-[#6b1d07] leading-tight min-h-[84px] md:min-h-[96px] flex items-end">
                    Pensé par une femme, pour les femmes
                  </h3>
                  <p className="text-slate-600 mt-4 max-w-[34ch]">
                    Chaque détail de Warmly naît d'une expérience vécue et d'une compréhension intime des besoins féminins.
                  </p>
                </div>

                {/* Colonne 2 */}
                <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-semibold text-[#6b1d07] leading-tight min-h-[84px] md:min-h-[96px] flex items-end">
                    Allier technologie & esthétisme
                  </h3>
                  <p className="text-slate-600 mt-4 max-w-[34ch]">
                    Une innovation technique qui ne sacrifie jamais l'élégance et le confort au quotidien.
                  </p>
                </div>

                {/* Colonne 3 */}
                <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-semibold text-[#6b1d07] leading-tight min-h-[84px] md:min-h-[96px] flex items-end">
                    Un engagement humain et sincère
                  </h3>
                  <p className="text-slate-600 mt-4 max-w-[34ch]">
                    Transparence, authenticité et proximité avec notre communauté sont au cœur de nos valeurs.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;