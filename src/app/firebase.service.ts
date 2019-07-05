import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
//import { Observable, of } from 'rxjs';
import { Note } from './note';

@Injectable()
export class FirebaseService {
///https://www.youtube.com/watch?v=cwqeyOFcaoA&list=PLillGF-RfqbaISD5mxDCIjsSYk4jbiXi4&index=2
///https://www.youtube.com/watch?v=5I6k77uqtLY

////Auth
////https://www.youtube.com/watch?v=O_jxEC0hWcA&t=1301s
  noteCollection:AngularFirestoreCollection<Note>;
  notes:Observable<Note[]>;

  constructor(public afs:AngularFirestore) {
    console.log("firebase.service");
    this.noteCollection = this.afs.collection<Note>('note');
    this.notes = this.noteCollection.snapshotChanges().map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Note;
        data.id = action.payload.doc.id;
        console.log(data);
        return data;
      })
    });
  }

  getNotes():Observable<Note[]>{
    console.log(this.notes);
    return this.notes;
  }

  addNote(note:Note){
    
  }

  deleteNote(note:Note):Observable<Note[]>{
    return this.notes;
  }

  save(note:Note):Observable<Note[]>{
    return this.notes;
  }

}