import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Note } from './note';

const NOTES: Note[] = [
  { id: 1, title: 'Search',description:'Add Notes searching features' },
  { id: 2, title: 'Search Style',description:'Apply apply apropriate styles to the search' },
  { id: 3, title: 'Focuse styling',description:'Remove focuse styling' },
  { id: 4, title: 'Database',description:'Add mongodb database' },
  { id: 5, title: 'Users',description:'Add User Registration  pages' },
  { id: 6, title: 'Routing',description:'Add routing to  nessosory pages' },
  { id: 7, title: 'Dynama',description:'description 17' },
  { id: 8, title: 'Dr IQ',description:'description 18' },
  { id: 9, title: 'Magma',description:'description 19' },
  { id: 10, title: 'Tornado',description:'description 20' },
  { id: 11,  title:"User", description:"Add users to"  }
];

@Injectable()
export class NotesService {
  notes:Note[];
  tempNotes:Note[];
  searchNotes:Note[];
  constructor() { 
    this.notes=NOTES;
  }

  private searchSource = new BehaviorSubject('');
  searchObservable = this.searchSource.asObservable();

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  addNote(note:Note){
    this.notes.push({id:note.id,title:note.title,description:note.description});
  }

  deleteNote(note:Note):Observable<Note[]>{
    this.notes = this.notes.filter(h => h !== note);
    console.log(this.notes);
    return of(this.notes);
  }

  save(note:Note):Observable<Note[]>{
    note = this.notes.findIndex(n=>n.id==note.id);
    console.log(this.notes);
    return of(this.notes);
  }
  
  search(title:string):Observable<Note[]>{
    this.searchText(title);
    this.tempNotes  = this.notes;
    console.log(this.tempNotes);
    if(title.length>0)
    {
      this.searchNotes = this.tempNotes.filter(n => n.title.includes(title));
      return of(this.searchNotes);
    }
    else
    {
      return of(this.tempNotes);
    }
  }

  searchText(text:string){
    this.searchSource.next(text);
  }
}