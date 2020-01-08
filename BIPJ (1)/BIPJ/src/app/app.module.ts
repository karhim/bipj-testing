import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireAuth } from 'angularfire2/auth';

import { config } from './app.firebase';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AuthProvider } from 'src/providers/auth';
import { RequestsProvider } from 'src/providers/requests';
import { ChatProvider } from 'src/providers/chat';
import { UserProvider } from 'src/providers/user';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    RequestsProvider,
    ChatProvider,
    UserProvider,
    AngularFireAuth, 
    Geolocation,
    NativeGeocoder, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
