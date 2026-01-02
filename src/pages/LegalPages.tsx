import React from 'react';

export const MentionsLegales = () => (
  <main className="pt-[72px] pb-16 bg-white">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#642315] mb-8">Mentions légales</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Entreprise</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Entreprise</strong> : Warmly</li>
            <li><strong>Forme juridique</strong> : Entrepreneur individuel (EI)</li>
            <li><strong>SIRET</strong> : 94271728100011</li>
            <li><strong>Adresse</strong> : 68920 Wettolsheim, France</li>
            <li><strong>Email</strong> : <a href="mailto:contact@warmly.fr" className="text-[#642315] hover:underline font-medium">contact@warmly.fr</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Hébergement</h2>
          <p className="text-gray-700">Le site warmly.fr est hébergé par Shopify.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-3">L'ensemble des contenus présents sur le site (textes, images, design, logo) est la propriété exclusive de Warmly.</p>
          <p className="text-gray-700">Toute reproduction est interdite sans autorisation préalable.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Responsabilité</h2>
          <p className="text-gray-700">Warmly ne saurait être tenue responsable d'une mauvaise utilisation des produits.</p>
        </section>
      </div>
    </div>
  </main>
);

export const CGV = () => (
  <main className="pt-[72px] pb-16 bg-white">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#642315] mb-8">Conditions générales de vente</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">1. Commandes</h2>
          <p className="text-gray-700">Toute commande passée sur le site warmly.fr implique l'acceptation pleine et entière des présentes conditions générales de vente.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">2. Prix</h2>
          <p className="text-gray-700">Les prix sont indiqués en euros, toutes taxes comprises (TTC). Warmly se réserve le droit de modifier ses prix à tout moment, sans incidence sur les commandes déjà validées.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">3. Paiement</h2>
          <p className="text-gray-700 mb-3">Le paiement est sécurisé et effectué exclusivement via Shopify Payments.</p>
          <p className="text-gray-700">Aucune donnée bancaire n'est stockée par Warmly.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">4. Livraison</h2>
          <p className="text-gray-700">Les modalités et délais de livraison sont précisés lors de la commande et dans notre politique d'expédition.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">5. Droit de rétractation et retours</h2>
          <p className="text-gray-700 mb-3">Le client dispose d'un délai de 14 jours après réception pour exercer son droit de rétractation.</p>
          <p className="text-gray-700">Les conditions complètes sont détaillées dans notre <a href="/return-policy" className="text-[#642315] hover:underline font-medium">politique de retour</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">6. Remboursements</h2>
          <p className="text-gray-700">Les remboursements sont effectués après réception et vérification du produit retourné, via le moyen de paiement utilisé lors de la commande.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">7. Service client</h2>
          <p className="text-gray-700">Pour toute question, le service client est joignable à l'adresse suivante : <a href="mailto:contact@warmly.fr" className="text-[#642315] hover:underline font-medium">contact@warmly.fr</a></p>
        </section>
      </div>
    </div>
  </main>
);

export const ReturnPolicy = () => (
  <main className="pt-[72px] pb-16 bg-white">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#642315] mb-8">Politique de retour</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Délai de rétractation</h2>
          <p className="text-gray-700">Vous disposez de 14 jours à compter de la réception de votre commande pour demander un retour.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Procédure de retour</h2>
          <p className="text-gray-700 mb-3">Pour initier un retour, merci de contacter notre service client à <a href="mailto:contact@warmly.fr" className="text-[#642315] hover:underline font-medium">contact@warmly.fr</a> en indiquant votre numéro de commande.</p>
          <p className="text-gray-700 mb-3">Warmly peut fournir, à la demande du client, une étiquette de retour afin de faciliter l'envoi du colis.</p>
          <p className="text-gray-700">Le coût de cette étiquette sera déduit du montant du remboursement.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Conditions de retour</h2>
          <ul className="space-y-2 text-gray-700 pl-4">
            <li>• L'article doit être non porté, non lavé et dans son état d'origine</li>
            <li>• Le produit doit être retourné avec tous ses accessoires</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">Remboursement</h2>
          <p className="text-gray-700">Après réception et vérification du produit, le remboursement sera effectué sous 14 jours via le moyen de paiement utilisé lors de la commande, déduction faite, le cas échéant, des frais de retour.</p>
        </section>
      </div>
    </div>
  </main>
);

export const PrivacyPolicy = () => (
  <main className="pt-[72px] pb-16 bg-white">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#642315] mb-4">Politique de confidentialité</h1>
      <p className="text-sm text-gray-600 mb-8">Dernière mise à jour : 15 décembre 2025</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-base">
          Chez Warmly, la protection de vos données personnelles est une priorité.
          La présente politique de confidentialité explique comment vos informations sont collectées, utilisées et protégées lorsque vous naviguez sur le site <a href="https://www.warmly.fr" className="text-[#642315] hover:underline font-medium">www.warmly.fr</a> ou effectuez une commande.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">1. Responsable du traitement</h2>
          <p className="mb-3">Le responsable du traitement des données est :</p>
          <ul className="space-y-2 pl-4">
            <li><strong>Entreprise :</strong> Warmly</li>
            <li><strong>Statut :</strong> Entrepreneur individuel</li>
            <li><strong>SIRET :</strong> 94271728100011</li>
            <li><strong>Adresse :</strong> 68920 Wettolsheim, France</li>
            <li><strong>Email :</strong> <a href="mailto:contact@warmly.fr" className="text-[#642315] hover:underline font-medium">contact@warmly.fr</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">2. Données personnelles collectées</h2>
          <p className="mb-3">Dans le cadre de l'utilisation du site, Warmly peut collecter les données suivantes :</p>
          <ul className="space-y-2 pl-4">
            <li>• Nom et prénom</li>
            <li>• Adresse postale</li>
            <li>• Adresse email</li>
            <li>• Numéro de téléphone</li>
            <li>• Informations nécessaires au traitement des commandes</li>
          </ul>
          <div className="mt-4 p-4 bg-[#e0b6ae]/10 rounded-lg border-l-4 border-[#642315]">
            <p className="text-sm">
              Les données de paiement sont traitées de manière sécurisée par Shopify.
              <strong> Warmly ne stocke et n'a jamais accès à vos informations bancaires.</strong>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">3. Utilisation des données</h2>
          <p className="mb-3">Les données collectées sont utilisées uniquement pour :</p>
          <ul className="space-y-2 pl-4">
            <li>• Le traitement et la livraison des commandes</li>
            <li>• La gestion de la relation client (confirmation, suivi, service après-vente)</li>
            <li>• L'amélioration de l'expérience utilisateur sur le site</li>
            <li>• L'envoi de communications commerciales uniquement si vous y avez consenti</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">4. Conservation des données</h2>
          <p>
            Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales et réglementaires.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">5. Droits des utilisateurs</h2>
          <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="space-y-2 pl-4">
            <li>• Droit d'accès à vos données</li>
            <li>• Droit de rectification</li>
            <li>• Droit de suppression</li>
            <li>• Droit à la portabilité</li>
            <li>• Droit d'opposition et de retrait du consentement à tout moment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">6. Cookies</h2>
          <p>
            Le site Warmly utilise uniquement des cookies strictement nécessaires à son bon fonctionnement (gestion du panier, navigation sur le site).
            <br />
            Aucun cookie de mesure d'audience ou de marketing n'est utilisé.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#642315] mb-4">7. Contact</h2>
          <p>
            Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter :
            <a href="mailto:contact@warmly.fr" className="text-[#642315] hover:underline font-medium ml-1">contact@warmly.fr</a>
          </p>
        </section>
      </div>
    </div>
  </main>
);