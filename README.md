# test-tech-aos

Test technique demandé chez Aos

### L'énoncé ;

Le but est de créer une petite application de login via email et mot de passe et de créer 2 tests automatisés avec Puppeteer.

A. Création de l'application
1) Créer une page d'identification dans lequel l'utilisateur doit rentrer un Email et un Mot de passe
2) Implémenter dans la base de donnée un "compte" qui te permettra de tester ton portail
3) Si les credentials sont bons tu es redirigé vers une page avec un texte sur la page : Success
4) Si les crédentials ne sont pas bon un message d'erreur apparaît sur la page de login

B. Tester avec Puppeteer
1) Coder l'automatisation du test sur Puppeteer (2 tests)
-> Un test pour le login success
-> Un test pour le login error
-> Executer puppeteer en mode console (les deux tests doivent passer)
2) Poster le tout sur github et envoyer le lien.

Techs à utiliser :
Back : NodeJS
Front : ReactJS - React-router
Base de données : MongoDB
Framework de test : Puppeteer

---------------------------------------------------------------------------------------

Pour tester le projet, merci de bien vouloir cloner le repo.
Importer le fichier db.json dans votre propre db (mon chemin => nom de la db: 'test-tech', nom de la collection => 'users')

Se mettre dans le dossier front en console, lancer npm i puis npm start. Dans une autre console, se placer dans le dossier back-aos, lancer node server.js. Dans une troisieme console, se placer dans front, et lancer npm test (presser la touche 'a' ensuite) pour lancer les tests puppeteer.


Pour m'expliquer rapidement, je n'ai pas utilisé de cryptage, puisque le cryptage se déroule lors d'une inscription, fonctionalité qui n'a pas été implémenté dans ce projet.
Pour toute la partie front/back, j'ai pu me débrouiller seule. Pour la partie test, n'ayant jamais vraiment fait cela, j'ai reçu un peu d'aide pour me poser les bonnes questions, mais c'est toujours moi qui ai codé et imposé ma logique.



