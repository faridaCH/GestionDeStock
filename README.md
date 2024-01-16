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

\GestionDeStock> ng new Gestion-Stock-FrontEnd      
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE Gestion-Stock-FrontEnd/angular.json (3303 bytes)
........
CREATE Gestion-Stock-FrontEnd/src/app/app.component.scss (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.


### Ajout de Bootstrap au projet:
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

### Création de Composant
- ng g component xyz
### Ajout de Font Awesome  à angular pour les icones 
- npm install --save @fortawesome/fontawesome-free
- Dans Angular.json ajouter la ligne suivante dans styles:  "node_modules/@fortawesome/fontawesome-free/css/all.css","node_modules/@fortawesome/fontawesome-free/scss/solid.scss",

            "styles": [
              "node_modules/bootstrap/scss/bootstrap.scss",

              "node_modules/bootstrap-icons/font/bootstrap-icons.css",

              "node_modules/@fortawesome/fontawesome-free/css/all.css",
              "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",

              "src/styles.scss"
            ],
