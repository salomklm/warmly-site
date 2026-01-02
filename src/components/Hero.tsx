import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  const realign = React.useCallback(() => {
    const title = titleRef.current;
    const cta = ctaRef.current;
    if (!title || !cta) return;

    // Batch DOM reads and writes to prevent forced reflow
    requestAnimationFrame(() => {
      // Read phase
      const tLeft = title.getBoundingClientRect().left;
      const cLeft = cta.getBoundingClientRect().left;
      const delta = tLeft - cLeft;

      // Write phase
      requestAnimationFrame(() => {
        (cta.style as any).transform = `translateX(${Math.round(delta)}px)`;
      });
    });
  }, []);

  React.useLayoutEffect(() => {
    realign();
    const onResize = () => realign();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [realign]);

  useEffect(() => {
    setLoaded(true);
    
    // Preload the product page for faster navigation
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/culotte-chauffante-menstruelle';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative m-0 p-0 overflow-hidden -mb-px">
      <div className="relative w-full h-[82vh] sm:h-[86vh] lg:h-[88vh]">
        <img 
          src="https://res.cloudinary.com/dveeoqhx5/image/upload/f_auto,q_auto:low,w_900/2_w2twtx.jpg"
          srcSet="
            https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto:low,w_600/2_w2twtx.webp 600w,
            https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto:low,w_900/2_w2twtx.webp 900w,
            https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto:low,w_1200/2_w2twtx.webp 1200w"
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 1200px"
          alt="Femme portant la culotte chauffante Warmly pour soulager les douleurs menstruelles" 
          className="absolute inset-0 w-full h-full object-cover rounded-none"
          style={{ objectPosition: '85% center' }}
          width="1200"
          height="800"
          loading="eager"
          fetchpriority="high"
        />
        
        {/* Overlay contenu */}
        <div className="absolute inset-0 z-10">
          {/* Wrapper plein écran pour contrôler la verticale */}
          <div className="h-full flex flex-col sm:block">
            {/* Bloc texte + CTA */}
            <div
              className="mt-auto sm:mt-0
                         pl-6 sm:pl-8 lg:pl-10 xl:pl-12
                         pb-[8vh] sm:pb-0"
            >
              {/* Conteneur de contenu avec max-width */}
              <div 
                className={`max-w-xl
                            py-8 sm:py-12 sm:pt-[30vh]
                            ml-[10%] sm:ml-[10%]
                            transition-all duration-1000 ${
                              loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                 }`}
              >
                <h1 
                  ref={titleRef}
                  className="text-left font-semibold tracking-[-0.01em] text-[#642315]
                             text-[22px] sm:text-[34px] md:text-[39px] lg:text-[41px]
                             leading-[1.08] max-w-[16ch] m-0
                             bg-transparent backdrop-blur-0 shadow-none border-0"
                >
                  <span
                    className="inline-block align-top"
                  >
                    Le vêtement chauffant qui révolutionne le confort féminin.
                  </span>
                </h1>
                
                <div ref={ctaRef} className="mt-6 ml-[8px] sm:ml-0 will-change-transform flex justify-start">
                  <Link
                    to="/culotte-chauffante-menstruelle"
                    className="inline-flex items-center justify-center
                               bg-[#642315] hover:bg-[#4e1a0e]
                               text-white font-medium text-lg
                               px-6 py-2.5 rounded-sm
                               transition-colors duration-200
                               sm:px-8 sm:py-3"
                  >
                    Précommander
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;