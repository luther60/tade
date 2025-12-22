TADE – Prototype de site (statique)
==================================

Contenu
- index.html : accueil (conversion + preuves)
- services.html + pages service (tableau, IRVE, chauffe-eau, collectivités)
- realisations.html : cas concrets (à alimenter en photos)
- zones.html + pages locales (Compiègne, Beauvais, Amiens, Chantilly, Senlis, Creil)
- boutique.html : preuve via la boutique e-commerce (lien à remplacer)
- recrutement.html : contenu + mini formulaire (copie résumé)
- contact.html : contact + devis filtré (copie résumé)
- legal.html : mentions légales / confidentialité (à compléter)

À personnaliser en priorité
1) Téléphone / Email / Adresse / URL boutique
   -> dans le fichier: assets/ (ou directement dans les HTML)
   -> valeurs actuellement: {"name": "TADE", "city": "Lachelle", "region": "Oise (Hauts-de-France)", "phone": "03 00 00 00 00", "email": "contact@tade-electricite.fr", "address": "Lachelle (Oise) – France", "boutique_url": "https://votre-boutique-electrique.example"}

2) Mentions légales + Assurance + Qualifs
   -> legal.html

3) Photos réelles
   -> ajoutez vos images dans assets/img/ et remplacez les contenus de realisations.html

Important (formulaires)
- Ce site est statique: pas d’envoi automatique.
- La page contact et recrutement génèrent un résumé que vous copiez/collez.
- Pour l’envoi: connectez à votre backend (Symfony) ou à un service de formulaire.

Bonnes pratiques conversion
- Ajoutez 10-20 avis Google (via Google Business Profile) dès que possible.
- Ajoutez 6-10 photos réelles (tableaux, finitions, chantiers propres) -> énorme impact confiance.
