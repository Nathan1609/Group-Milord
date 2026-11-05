# Site Group Milord – plombier à Liège

## Structure
- `index.html` : la page
- `css/style.css` : styles (couleurs en haut, bloc `:root`)
- `js/main.js` : formulaire + animations
- `assets/images/` : logo, photos, favicon

## Ouvrir dans VS Code
1. Dossier > Ouvrir le dossier… puis choisir `group-milord-site`.
2. Installer l’extension **Live Server**, clic droit sur `index.html` > *Open with Live Server*.

## Mettre en ligne sur GitHub Pages
1. Créer un dépôt GitHub (ex. `group-milord`) et y envoyer tous les fichiers.
2. Settings > Pages > Source : *Deploy from a branch* > `main` / `(root)` > Save.
3. Le site est disponible sur `https://<votre-pseudo>.github.io/group-milord/`.

## Avant de présenter / mettre en production
- **Formulaire** : faire un premier envoi test, puis cliquer sur le lien d’activation reçu sur groupmilord@gmail.com (service FormSubmit).
- **Nom de domaine** : ajouter dans `index.html` la balise `<link rel="canonical" href="https://nom-de-domaine/">`, l’URL dans les balises Open Graph et dans le JSON-LD, puis créer un `sitemap.xml`.
- **Vérifier** le numéro de TVA dans le pied de page.
- **Logo / photos / avis** : à ajouter avec le client.
