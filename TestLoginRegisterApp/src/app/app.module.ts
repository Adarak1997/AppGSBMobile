import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnexionPage } from '../pages/connexion/connexion';
import { InscriptionPage } from '../pages/inscription/inscription';
import { AccueilPage } from '../pages/accueil/accueil';
import { ComptePage } from '../pages/compte/compte';
import { FichePage } from '../pages/fiche/fiche';
import { DetailsPage } from '../pages/details/details';
import { AdminPage } from '../pages/admin/admin';
import { ListeuserPage } from '../pages/listeuser/listeuser';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/storage';
import { AjoutfichePage } from '../pages/ajoutfiche/ajoutfiche';
import { FichefraisProvider } from '../providers/fichefrais/fichefrais';
import { AuthProvider } from '../providers/auth/auth';
import { ConnexionadminPage } from '../pages/connexionadmin/connexionadmin';
import { DetailsfraisforfaitProvider} from '../providers/detailsfraisforfait/detailsfraisforfait';
import { UtilisateurProvider } from '../providers/utilisateur/utilisateur';
import { ModifierPage } from '../pages/modifier/modifier';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConnexionPage,
    ConnexionadminPage,
    InscriptionPage,
    AccueilPage,
    ComptePage,
    FichePage,
    AjoutfichePage,
    DetailsPage,
    AdminPage,
    ListeuserPage,
    ModifierPage
     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConnexionPage,
    ConnexionadminPage,
    InscriptionPage,
    AccueilPage,
    ComptePage,
    FichePage,
    AjoutfichePage,
    DetailsPage,
    AdminPage,
    ListeuserPage,
    ModifierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FichefraisProvider,
    DetailsfraisforfaitProvider,
    UtilisateurProvider,
    AuthProvider
  ]
})
export class AppModule {}
