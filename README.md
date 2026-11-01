# 🚑 Gestes de Premiers Secours

Application web (PWA) d'aide-mémoire des gestes de premiers secours, en français.
Elle s'installe sur le téléphone comme une application et **fonctionne sans Internet** après la première visite.

## Sommaire
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Lancer en local](#lancer-en-local)
- [Déployer](#déployer)
  - [1. Netlify](#1-netlify-gratuit--le-plus-simple)
  - [2. Vercel](#2-vercel-gratuit)
  - [3. Cloudflare Pages](#3-cloudflare-pages-gratuit)
  - [4. GitHub Pages](#4-github-pages)
  - [5. Render](#5-render-gratuit)
  - [6. Firebase Hosting](#6-firebase-hosting-gratuit)
  - [7. Docker sur un serveur / VPS](#7-docker-sur-un-serveur--vps)
  - [8. Serveur sans Docker (Nginx)](#8-serveur-sans-docker-nginx)
- [Installer l'app sur un téléphone](#installer-lapp-sur-un-téléphone)
- [Mettre à jour le contenu](#mettre-à-jour-le-contenu)
- [Avertissement](#️-avertissement)

## Fonctionnalités
- 11 fiches : Protéger/Alerter/Secourir, arrêt cardiaque, PLS, étouffement adulte et nourrisson, hémorragie, brûlure, AVC, malaise, convulsions, traumatisme
- Boutons d'appel direct : 112, 15, 18, 114 (SMS)
- Recherche sans accents (« brulure » trouve « Brûlure »)
- Métronome de massage cardiaque (110/min, son + vibration + compteur jusqu'à 30)
- Hors-ligne (service worker), installable, thème sombre automatique
- Aucune dépendance : HTML, CSS et JavaScript simples

## Structure du projet
```
public/              ← l'application (c'est ce dossier qu'on publie)
  index.html
  style.css
  app.js             ← logique (liste, recherche, métronome…)
  data.js            ← contenu des fiches (à modifier pour ajouter/éditer des gestes)
  sw.js              ← service worker (mode hors-ligne)
  manifest.json      ← configuration PWA
  icon.svg
Dockerfile           ← image Nginx
nginx.conf
docker-compose.yml
netlify.toml         ← config Netlify
vercel.json          ← config Vercel
```

## Lancer en local
```bash
cd public
python3 -m http.server 8080
```
Puis ouvrir http://localhost:8080

Alternative avec Node.js : `npx serve public`

> ℹ️ Le mode hors-ligne et l'installation exigent **HTTPS** (sauf sur `localhost`). Toutes les plateformes ci-dessous fournissent HTTPS automatiquement, sauf les options serveur (7 et 8) où il faut le configurer.

## Déployer

### 1. Netlify (gratuit – le plus simple)
**a) Par glisser-déposer, sans compte technique :**
1. Aller sur https://app.netlify.com/drop
2. Glisser le dossier `public/` dans la page → l'URL est donnée immédiatement.

**b) Depuis GitHub (déploiement automatique à chaque push) :**
1. https://app.netlify.com → *Add new site* → *Import an existing project* → GitHub
2. Choisir le dépôt `premiers-secours` (Netlify accède aux dépôts privés)
3. Le fichier `netlify.toml` configure tout (dossier publié : `public`, pas de commande de build) → *Deploy*

**c) En ligne de commande :**
```bash
npx netlify-cli login
npx netlify-cli deploy --dir=public --prod
```

### 2. Vercel (gratuit)
**Depuis GitHub :** https://vercel.com/new → importer le dépôt → *Framework Preset* : `Other` → *Deploy*
(le fichier `vercel.json` indique déjà le dossier `public`).

**En ligne de commande :**
```bash
npx vercel login
npx vercel --prod
```

### 3. Cloudflare Pages (gratuit)
1. https://dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Connect to Git*
2. Choisir le dépôt
3. *Build command* : (laisser vide) — *Build output directory* : `public`
4. *Save and Deploy*

Ou en ligne de commande :
```bash
npx wrangler pages deploy public --project-name=premiers-secours
```

### 4. GitHub Pages
> ⚠️ Pour un dépôt **privé**, GitHub Pages nécessite un abonnement payant (GitHub Pro, Team ou Enterprise). Avec un compte gratuit, il faut rendre le dépôt public, ou utiliser Netlify / Vercel / Cloudflare.

1. Sur GitHub : *Settings* → *Pages* → *Source* : **GitHub Actions**
2. Créer le fichier `.github/workflows/pages.yml` :
```yaml
name: Déployer sur GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public
      - id: deployment
        uses: actions/deploy-pages@v4
```
3. Pousser sur `main` → l'app est publiée sur `https://<utilisateur>.github.io/premiers-secours/`

### 5. Render (gratuit)
1. https://dashboard.render.com → *New* → *Static Site* → connecter le dépôt
2. *Build Command* : (vide) — *Publish Directory* : `public`
3. *Create Static Site*

### 6. Firebase Hosting (gratuit)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting      # dossier public : "public", single-page app : Non, écraser index.html : Non
firebase deploy
```

### 7. Docker sur un serveur / VPS
Prérequis : un serveur (OVH, Hetzner, DigitalOcean, AWS…) avec Docker installé.
```bash
git clone https://github.com/<utilisateur>/premiers-secours.git
cd premiers-secours
docker compose up -d --build
```
L'app est disponible sur `http://IP_DU_SERVEUR:8080`.

Sans docker compose :
```bash
docker build -t premiers-secours .
docker run -d -p 8080:80 --restart unless-stopped --name premiers-secours premiers-secours
```

**Ajouter HTTPS avec Caddy** (certificat Let's Encrypt automatique) — il faut un nom de domaine pointant vers le serveur :
```bash
sudo apt install -y caddy
echo 'secours.mondomaine.com {
    reverse_proxy localhost:8080
}' | sudo tee /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

**Mettre à jour après un changement :**
```bash
git pull && docker compose up -d --build
```

### 8. Serveur sans Docker (Nginx)
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
sudo cp -r public/* /var/www/html/
sudo cp nginx.conf /etc/nginx/sites-available/default
sudo sed -i 's#/usr/share/nginx/html#/var/www/html#' /etc/nginx/sites-available/default
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d secours.mondomaine.com     # HTTPS
```

## Installer l'app sur un téléphone
- **Android (Chrome)** : ouvrir l'URL → menu ⋮ → *Installer l'application* / *Ajouter à l'écran d'accueil*
- **iPhone (Safari)** : ouvrir l'URL → bouton Partager → *Sur l'écran d'accueil*

Après la première ouverture, l'app fonctionne sans connexion.

## Mettre à jour le contenu
- Fiches : modifier `public/data.js`
- Numéros d'urgence : `public/index.html` (section `emergency`) et les textes de `public/data.js` — à adapter selon le pays
- **Important :** après chaque modification, incrémenter la version du cache dans `public/sw.js`
  (`premiers-secours-v1` → `premiers-secours-v2`…) pour que les téléphones reçoivent la mise à jour.

## ⚠️ Avertissement
Ce contenu s'inspire des recommandations PSC1 (France) et de l'ERC (European Resuscitation Council).
Il ne remplace pas une formation aux premiers secours. Faites-le valider par un formateur ou un
professionnel de santé avant toute diffusion publique.
