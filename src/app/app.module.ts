import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StickyNoteComponent } from './sticky/sticky.component';
import { StickyListComponent } from './sticky-list/sticky-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { NotesService } from './notes.service';
import { NavComponent } from './components/nav/nav/nav.component';
import { SearchComponent } from './components/nav/search/search.component';

import { StickyAlertComponent } from './components/common/sticky-alert/sticky-alert.component';
import { ProgressComponent } from './components/common/progress/progress.component';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FirebaseService } from './firebase.service';
import { LoginComponent } from './components/user/login/login.component';
import { EmailComponent } from './components/user/email/email.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { MembersComponent } from './components/user/members/members.component';
import { AuthService } from './auth.service';
//import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAWlKJBHRGvHn9y5CfOOBFyxXWEad4jyOg",
  authDomain: "stickynotedb.firebaseapp.com",
  databaseURL: "https://stickynotedb.firebaseio.com",
  projectId: "stickynotedb",
  storageBucket: "stickynotedb.appspot.com",
  messagingSenderId: "301539775082",
  appId: "1:301539775082:web:20086d3ef23d52d3"
};

    

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,HttpClientModule,   AngularFireModule.initializeApp(firebaseConfig),routes,
   AngularFirestoreModule,AngularFirestoreModule ],
  declarations: [ AppComponent,  StickyNoteComponent, StickyListComponent, NavComponent, SearchComponent,  StickyAlertComponent, ProgressComponent, LoginComponent, EmailComponent, SignupComponent, MembersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotesService, FirebaseService, AuthService]
})
export class AppModule { }
