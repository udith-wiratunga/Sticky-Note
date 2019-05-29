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

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent,  StickyNoteComponent, StickyListComponent, NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotesService]
})
export class AppModule { }
