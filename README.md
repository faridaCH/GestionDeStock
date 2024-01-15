# GestionDeStock
## Pré-requis
### Choix de L'IDE:
- VsCode, IntelliJ Ultimate, WebStrom ...
### Installation de NodeJS (https://nodejs.org/en)
- node -v : pour verifier la version installer (v16.13.0)
### Installation de NPM ( https://www.npmsjs.com) 
  - npm -v : pour verifier l'installation (8.1.4)
### Installation de Angular Cli:
dans le CMD executer la commande 
- npm install -g @angular/cli  : version global
- npm install -g @angular/cli@13.0.4 : version specifique 
- npm install @angular/cli : version local
- ng version : pour verifier l'installation et la version

## Etapes de creation de projet:
###  Creeation de nouveau projet Angular cli:
- ng new Gestion-Stock-Front 
- Souhaitez-vous ajouter le routage angulaire ? (o/N) entrez y
- Quel format de feuille de style souhaitez-vous utiliser ? Sélectionnez CSS
image.png

### AJout de Bootstrap au projet:
- npm install bootstrap bootstrap-icons
- dans Angular.json modifié le styles et le scripts: 

"styles": [

  "node_modules/bootstrap/scss/bootstrap.scss",

  "node_modules/bootstrap-icons/font/bootstrap-icons.css",

  "src/styles.scss"

],

"scripts": [

  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

]

