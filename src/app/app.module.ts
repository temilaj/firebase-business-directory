import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAwGooL70PnLs0fcD6lVV0HEHgOq9ZVzUY',
  authDomain: 'testbase-4f756.firebaseapp.com',
  databaseURL: 'https://testbase-4f756.firebaseio.com',
  storageBucket: 'testbase-4f756.appspot.com',
  messagingSenderId: '329154049453'
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
