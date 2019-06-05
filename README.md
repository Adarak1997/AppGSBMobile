# AppGSBMobile


# Installation

1. Installer git bash 
2. Ouvrir git bash puis naviguer dans **WAMP/www** ou **MAMP/www** puis faites un git clone : 
**git clone https://github.com/Adarak1997/AppGSBMobile.git**
3. Ouvrir le terminal puis naviguer jusqu'au dossier **AppGSBMobile/TestLoginRegisterApp**
4. Entrer la commande `npm install`
5. Modifier la variable **url** dans le fichier api.ts de l'application Ionic pour la faire correspondre avec l'arborescence de vos fichiers.

#### Emplacement du fichier :
```shell
TestLoginRegisterApp > src > providers > api
  ```

#### Variable à modifier :
```php
url = 'http://localhost/AppGSBMobile/ApplicationWeb/';
  ```

6. Base de données 
      - Si vous avez une base de données, adaptez les requêtes des fichiers PHP du dossier **ApplicationWeb**
      - Si vous n'avez pas de base de données : créez-en une et appelez la "**appli_gsb**" puis importer le fichier **appli_gsb.sql**
      
7. Adapter le code **PHP** pour qu'il se connecte correctement à votre base de données

8. Tester l'application web
