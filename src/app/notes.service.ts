import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { Note } from './note';


@Injectable()
export class NotesService {
  notes:Note[];
  tempNotes:Note[];
  searchNotes:Note[];
  constructor(private firebaseService:FirebaseService) { 
    this.firebaseService.getNotes().subscribe(Notes=>this.notes=Notes);  
  }

  private searchSource = new BehaviorSubject(this.notes);
  searchObservable = this.searchSource.asObservable();

  search(text:string){
    //this.searchSource.next(this.searchNotes);
    this.tempNotes  = this.notes;
    //console.log(this.tempNotes);
    if(text.length>0)
    {
      this.searchNotes = this.tempNotes.filter(n => n.title.includes(text));
      this.searchSource.next(this.searchNotes);
    }
    else
    {
      this.searchSource.next(this.notes);
    }    
  }
}