import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'APPDOMAIN.firebaseapp.com',
  databaseURL: 'https://YOUR_APP_DATABASE.firebaseio.com',
  storageBucket: 'YOUR_APP_BUCKET.appspot.com',
  messagingSenderId: 'YOUR_MESSAGE_SENDERID'
  
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
