import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ComptePage } from '../pages/compte/compte';
import { FichePage } from '../pages/fiche/fiche';
import { DetailsPage } from '../pages/details/details';
import { AdminPage } from '../pages/admin/admin';
import { ListeuserPage } from '../pages/listeuser/listeuser';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { FichefraisProvider } from '../providers/fichefrais/fichefrais';
import { Api } from '../providers/api/api';
import { UtilisateurProvider } from '../providers/utilisateur/utilisateur';
import { User } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConnexionPage,
    ComptePage,
    FichePage,
    AdminPage,
    DetailsPage,
    ListeuserPage

     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Retour',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConnexionPage,
    ComptePage,
    FichePage,
    DetailsPage,
    AdminPage,
    ListeuserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FichefraisProvider,
    UtilisateurProvider,
    User,
    Api
  ]
})
export class AppModule {}
