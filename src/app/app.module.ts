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
import { LoginComponent } from './components/user/login/login.component';
import { EmailComponent } from './components/user/email/email.component';
import { MembersComponent } from './components/user/members/members.component';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent,  StickyNoteComponent, StickyListComponent, NavComponent, SearchComponent, LoginComponent, EmailComponent, MembersComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotesService]
})
export class AppModule { }
