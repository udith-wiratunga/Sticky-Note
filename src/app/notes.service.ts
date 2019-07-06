import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { Note } from './note';
/*
const NOTES: Note[] = [
  { noteId: 1, title: 'Nav style',description:'fix the nav bar style' },
  { noteId: 2, title: 'Search Style',description:'Apply apply apropriate styles to the search' },
  { noteId: 3, title: 'Focuse styling',description:'Remove focuse styling' },
  { noteId: 4, title: 'Database',description:'Add mongodb database' },
  { noteId: 5, title: 'Users',description:'Add User Registration  pages' },
  { noteId: 6, title: 'Routing',description:'Add routing to  nessosory pages' },
  { noteId: 7, title: 'Dynama',description:'description 17' },
  { noteId: 8, title: 'Dr IQ',description:'description 18' },
  { noteId: 9, title: 'Magma',description:'description 19' },
  { noteId: 10, title: 'Tornado',description:'description 20' },
  { noteId: 11,  title:'User', description:'Add users to'  }
];*/

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
/*
  getNotes(): Observable<Note[]> {
    console.log(this.notes);
    this.searchSource.next(this.notes);
    return of(this.notes);
  }

  addNote(note:Note){
    this.notes.push({noteId:note.noteId,title:note.title,description:note.description});
  }

  deleteNote(note:Note):Observable<Note[]>{
    this.notes = this.notes.filter(h => h !== note);
    //console.log(this.notes);
    return of(this.notes);
  }

  save(note:Note):Observable<Note[]>{
    note = this.notes.findIndex(n=>n.noteId==note.noteId);
    //console.log(this.notes);
    return of(this.notes);
  }
  
  searchText(title:string){
   
    this.tempNotes  = this.notes;
    //console.log(this.tempNotes);
    if(title.length>0)
    {
      this.searchNotes = this.tempNotes.filter(n => n.title.includes(title));
    }
    else
    {
      this.tempNotes;
    }
  }
*/
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