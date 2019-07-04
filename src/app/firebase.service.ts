import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Note } from './note';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
///https://www.youtube.com/watch?v=cwqeyOFcaoA&list=PLillGF-RfqbaISD5mxDCIjsSYk4jbiXi4&index=2
  
  noteCollection:AngularFirestoreCollection<Note>;
  notes:Observable<Note[]>;
  constructor(public afs:AngularFirestore) {
    this.noteCollection = this.afs.collection<Note>('note');
    this.notes = this.noteCollection.snapshotChanges().map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Note;
        data.id = action.payload.doc.id;
        return data;
      })
    });
    console.log(this.notes);
  }

  getNotes(){
    return this.notes;
  }

}