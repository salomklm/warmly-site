import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [stockData, setStockData] = useState<Record<string, { available: boolean; inStock: boolean }> | null>({
    'S': { available: true, inStock: true },
    'M': { available: true, inStock: true },
    'L': { available: true, inStock: true }
  });
  const [isLoadingStock, setIsLoadingStock] = useState(true);
  const [alertEmail, setAlertEmail] = useState('');
  const [alertSize, setAlertSize] = useState('XS');
  const [isSubmittingAlert, setIsSubmittingAlert] = useState(false);
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch real-time stock data from Shopify
    const fetchStock = async () => {
      try {
        setIsLoadingStock(true);

        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        console.log('Environment check:', {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseKey,
          url: supabaseUrl
        });

        if (!supabaseUrl || !supabaseKey) {
          throw new Error('Supabase credentials not configured');
        }

        const apiUrl = `${supabaseUrl}/functions/v1/check-stock`;
        console.log('Fetching stock from:', apiUrl);

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('Response status:', response.status, response.statusText);

        const data = await response.json();
        console.log('Stock API response:', data);

        // Always use stock data if present, regardless of success status
        if (data.stock) {
          console.log('Setting stock data:', data.stock);
          setStockData(data.stock);
        } else {
          throw new Error('No stock data in response');
        }
          
        
      } catch (error) {
        console.error('Error fetching stock:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
        // Fallback to static data - matches current Shopify inventory
        setStockData({
          'S': { available: true, inStock: true },
          'M': { available: true, inStock: true },
          'L': { available: true, inStock: true }
        });
      } finally {
        setIsLoadingStock(false);
      }
    };
    
    fetchStock();
  }, []);

  // Generate sizes array with real-time stock data
  const sizes = [
    { 
      value: 'XS', 
      label: 'XS', 
      variantId: null, 
      available: false, 
      outOfStock: true 
    },
    {
      value: 'S',
      label: 'S',
      variantId: '50284783763784',
      available: stockData?.S?.available ?? true,
      outOfStock: !(stockData?.S?.inStock ?? true)
    },
    {
      value: 'M',
      label: 'M',
      variantId: '50284783796552',
      available: stockData?.M?.available ?? true,
      outOfStock: !(stockData?.M?.inStock ?? true)
    },
    {
      value: 'L',
      label: 'L',
      variantId: '50284783829320',
      available: stockData?.L?.available ?? true,
      outOfStock: !(stockData?.L?.inStock ?? true)
    },
    { 
      value: 'XL', 
      label: 'XL', 
      variantId: null, 
      available: false, 
      outOfStock: true 
    },
    { 
      value: 'XXL', 
      label: 'XXL', 
      variantId: null, 
      available: false, 
      outOfStock: true 
    }
  ];

  const quantities = [1, 2, 3];

  const handleOrder = () => {
    const selectedSizeData = sizes.find(s => s.value === selectedSize);
    if (!selectedSizeData?.variantId) return;

    if (!selectedSizeData.available || selectedSizeData.outOfStock) {
      alert('Cette taille n\'est pas disponible. Veuillez choisir une autre taille.');
      return;
    }

    const checkoutUrl = `https://checkout.warmly.fr/cart/${selectedSizeData.variantId}:${selectedQuantity}`;
    window.open(checkoutUrl, '_blank');
  };

  const handleStockAlert = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!alertEmail || !alertSize) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    setIsSubmittingAlert(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Configuration manquante');
      }

      const apiUrl = `${supabaseUrl}/functions/v1/stock-alert`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: alertEmail,
          size: alertSize,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setAlertSubmitted(true);
      setAlertEmail('');
      setAlertSize('XS');

    } catch (error) {
      console.error('Error submitting stock alert:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmittingAlert(false);
    }
  };
  const images = [
    {
      src: "https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800,c_fill,ar_1:1/v1761175891/9_sisnxw.webp",
      alt: "Culotte chauffante Warmly pour soulager les douleurs menstruelles"
    },
    {
      src: "https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800,c_fill,ar_1:1/v1761176471/Bannie%CC%80re_YouTube_de_Science-fiction_Violet_Noir_et_Jaune_Fluo_scoqcn.webp",
      alt: "Technologie chauffante de la culotte Warmly"
    },
    {
      src: "https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800,c_fill,ar_1:1/v1761175924/6_prundr.webp",
      alt: "Contrôle de température de la culotte Warmly"
    },
    {
      src: "https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800,c_fill,ar_1:1/v1761175961/1_aly49g.webp",
      alt: "Vue détaillée de la culotte chauffante Warmly"
    },
    {
      src: "https://res.cloudinary.com/dveeoqhx5/image/upload/f_webp,q_auto,w_800,c_fill,ar_1:1/v1761176753/Bannie%CC%80re_YouTube_de_Science-fiction_Violet_Noir_et_Jaune_Fluo-1_xsyoy9.webp",
      alt: "Fonctionnalités de la culotte chauffante Warmly"
    }
  ];

  // Thumbnails optimized for smaller size
  const thumbnailImages = images.map(img => ({
    ...img,
    src: img.src.replace('w_800', 'w_150').replace('.webp', '.webp')
  }));

  const handleReturnPolicyClick = () => {
    window.scrollTo(0, 0);
  };

  // Check if any size is out of stock
  const hasOutOfStock = sizes.some(size => size.outOfStock);

  return (
    <main className="pt-[72px]">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">

          {/* === Colonne GAUCHE : GALERIE === */}
          <section className="w-full">
            <div className="w-full">
              {/* Grande image en premier */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="800"
                  className="w-full h-auto object-cover transition-transform duration-200 hover:scale-[1.01]"
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>

              {/* Miniatures en ligne, SOUS la grande image */}
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {thumbnailImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg border hover:opacity-90 cursor-pointer transition-all duration-200 ${
                      currentImage === index ? 'ring-2 ring-[#6b1d07] border-[#6b1d07]' : 'border-gray-200 hover:border-[#6b1d07]/50'
                    }`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width="150"
                      height="150"
                      className="w-full h-full object-cover rounded-lg"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* === Colonne DROITE : INFOS PRODUIT === */}
          <aside className="w-full space-y-4">
            <h1 className="text-3xl font-semibold text-[#6b1d07]">Culotte chauffante - Précommande</h1>
            <p className="text-xl font-medium">97 € — Livraison gratuite</p>
            <p className="text-sm text-gray-600 -mt-1">Expédition depuis la France – Livraison prévue <strong>début février</strong></p>

            {/* Sélecteurs de taille et quantité */}
            <div className="space-y-4">
              {/* Sélecteur de taille */}
              <div>
                <label className="block text-sm font-medium text-[#6b1d07] mb-2">
                  Taille {isLoadingStock && <span className="text-gray-500">(Vérification du stock...)</span>}
                </label>
                <div className="flex gap-2">
                  {sizes.map((size) => {
                    const isDisabled = !size.available || size.outOfStock;
                    
                    return (
                      <div
                        key={size.value}
                        className="relative group"
                      >
                        <button
                          onClick={() => !isDisabled && setSelectedSize(size.value)}
                          disabled={isDisabled}
                          className={`px-4 py-2 border rounded-lg font-medium transition-all duration-300 ease-out ${
                            isDisabled
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through opacity-60'
                              : selectedSize === size.value
                              ? 'bg-[#6b1d07] text-white border-[#6b1d07]'
                              : 'bg-white text-[#6b1d07] border-gray-300 hover:border-[#6b1d07] hover:scale-[1.02] transform'
                          }`}
                        >
                          {size.label}
                        </button>
                        
                        {/* Tooltip for out of stock sizes */}
                        {size.outOfStock && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Momentanément indisponible
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Info text about out of stock sizes */}
                <p className="text-xs text-gray-500 mt-2">
                  Les tailles barrées sont momentanément en rupture de stock.
                </p>
              </div>

              {/* Sélecteur de quantité */}
              <div>
                <label className="block text-sm font-medium text-[#6b1d07] mb-2">
                  Quantité
                </label>
                <div className="flex gap-2">
                  {quantities.map((qty) => {
                    const selectedSizeData = sizes.find(s => s.value === selectedSize);
                    const canSelectQuantity = selectedSizeData?.available && !selectedSizeData?.outOfStock;
                    
                    return (
                      <button
                        key={qty}
                        onClick={() => canSelectQuantity && setSelectedQuantity(qty)}
                        disabled={!canSelectQuantity}
                        className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                          !canSelectQuantity
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : selectedQuantity === qty
                            ? 'bg-[#6b1d07] text-white border-[#6b1d07]'
                            : 'bg-white text-[#6b1d07] border-gray-300 hover:border-[#6b1d07]'
                        }`}
                      >
                        {qty}
                      </button>
                    );
                  })}
                </div>
                
                <p className="text-xs text-gray-500 mt-2">
                  Astuce : 2 culottes = rotation de lavage plus simple
                </p>
              </div>
            </div>

            {/* Bouton de commande */}
            {(() => {
              const selectedSizeData = sizes.find(s => s.value === selectedSize);
              const isSelectedSizeAvailable = selectedSizeData?.available && !selectedSizeData?.outOfStock;
              
              return (
            <button 
              onClick={handleOrder}
                disabled={!selectedSize || !isSelectedSizeAvailable}
              className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-lg ${
                  !selectedSize || !isSelectedSizeAvailable
                  ? 'bg-gray-400 text-white cursor-not-allowed opacity-50'
                  : 'bg-[#47261b] text-white hover:bg-[#5a3022] opacity-100'
              }`}
            >
                {!selectedSize
                ? 'Sélectionnez une taille'
                  : !isSelectedSizeAvailable
                ? 'Taille non disponible' 
                : 'Précommander maintenant'
              }
            </button>
              );
            })()}

            {/* Description courte en bullets */}
            <div className="space-y-2 pt-4">
              <p>Soulage efficacement les douleurs menstruelles grâce à une chaleur ciblée</p>
              <p>Autonomie de 4h, 3 niveaux de chaleur réglables</p>
              <p>Recharge USB — câble inclus</p>
              <p>Léger, discret et confortable sous les vêtements</p>
              <p>Lavable à 30°C (batterie amovible)</p>
            </div>

            {/* Détails */}
            <div className="pt-2">
              <h2 className="text-lg font-semibold text-[#6b1d07] mb-2">Détails du produit</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Inclus : 1 culotte chauffante Warmly + 1 batterie rechargeable 5000mAh + câble USB</li>
                <li>Composition : 92% nylon, 8% spandex</li>
                <li>Certification : CE</li>
              </ul>
            </div>

            {/* Stock Alert Section */}
            <div className="bg-[#F8F8F8] rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#6b1d07]">
                Ma taille n'est plus disponible ?
              </h3>
              <p className="text-gray-700 text-sm">
                Laissez votre email et votre taille, et nous vous prévenons dès qu'elle revient en stock.
              </p>
              
              {!alertSubmitted ? (
                <form onSubmit={handleStockAlert} className="space-y-4">
                  <div>
                    <label htmlFor="alert-email" className="block text-sm font-medium text-[#6b1d07] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="alert-email"
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1d07] focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="alert-size" className="block text-sm font-medium text-[#6b1d07] mb-2">
                      Taille souhaitée
                    </label>
                    <select
                      id="alert-size"
                      value={alertSize}
                      onChange={(e) => setAlertSize(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1d07] focus:border-transparent"
                    >
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmittingAlert}
                    className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-lg ${
                      isSubmittingAlert
                        ? 'bg-gray-400 text-white cursor-not-allowed opacity-50'
                        : 'bg-[#47261b] text-white hover:bg-[#5a3022] opacity-100'
                    }`}
                  >
                    {isSubmittingAlert ? 'Envoi en cours...' : 'Me prévenir'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <p className="text-green-600 font-medium">
                    C'est noté ! On vous préviendra dès que la taille revient ✅
                  </p>
                  <button
                    onClick={() => setAlertSubmitted(false)}
                    className="text-[#6b1d07] text-sm underline mt-2 hover:no-underline"
                  >
                    Ajouter une autre alerte
                  </button>
                </div>
              )}
            </div>

            {/* Aide */}
            <div className="rounded-2xl bg-[#fff3ef] p-4 text-sm">
              Une question ? <Link to="/questions-frequentes" className="underline font-medium text-[#6b1d07]">Consultez la FAQ</Link>
              {" "}ou contactez-nous à <a href="mailto:contact@warmly.fr" className="underline font-medium text-[#6b1d07]">contact@warmly.fr</a>
            </div>

            {/* Politique de retour */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 text-center">
                Retour sous 14 jours. 
                <Link 
                  to="/politique-de-retour" 
                  className="text-[#6b1d07] hover:underline ml-1"
                  onClick={handleReturnPolicyClick}
                >
                  En savoir plus
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Note légale */}
      <p className="text-xs text-gray-400 text-center pb-8">
        Modèle protégé à l'INPI – reproduction interdite.
      </p>
    </main>
  );
};

export default ProductPage;