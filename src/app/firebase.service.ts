import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Note } from './note';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
///https://www.youtube.com/watch?v=cwqeyOFcaoA&list=PLillGF-RfqbaISD5mxDCIjsSYk4jbiXi4&index=2
  
  noteCollection:AngularFirestoreCollection<Note>;
  notes:Observable<Note[]>;
  constructor(public afs:AngularFirestore) { 
      this.notes=this.afs.collection('notes').snapshotChanges().map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Note;
          data.id = a.payload.doc.id;
          return data;
        })
      });
  }

  getNotes(){
    return this.notes;
  }

}