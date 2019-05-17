import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './note';

const NOTES: Note[] = [
  { id: 10,  title:"title1", description:"Description"  },
  { id: 11, title: 'Mr. Nice',description:'description 11' },
  { id: 12, title: 'Narco',description:'description 12' },
  { id: 13, title: 'Bombasto',description:'description 13' },
  { id: 14, title: 'Celeritas',description:'description 14' },
  { id: 15, title: 'Magneta',description:'description 15' },
  { id: 16, title: 'RubberMan',description:'description 16' },
  { id: 17, title: 'Dynama',description:'description 17' },
  { id: 18, title: 'Dr IQ',description:'description 18' },
  { id: 19, title: 'Magma',description:'description 19' },
  { id: 20, title: 'Tornado',description:'description 20' }
];

@Injectable()
export class NotesService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
  
}