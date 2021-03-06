import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
//import { Observable, of } from 'rxjs';
import { Note } from './note';

@Injectable()
export class FirebaseService {

  noteCollection:AngularFirestoreCollection<Note>;
  notes:Observable<Note[]>;
  noteDoc:AngularFirestoreDocument<Note>;
  tempNotes:Observable<Note[]>;
  
  constructor(public afs:AngularFirestore,public af:AngularFireAuth) {
    //https://dev.to/crazedvic/query--update-firestore-documents-in-angular-7-5fhg
      this.af.authState.subscribe(auth => { 
        if(auth) {
          this.noteCollection = this.afs.collection<Note>('note',ref=>ref.where('email','==',auth.email));
          this.notes = this.noteCollection.snapshotChanges().map(changes => {
            return changes.map( action => {
              const data = action.payload.doc.data() as Note;
              data.id = action.payload.doc.id;
              //console.log(data);
              return data;
            })
          });
        }
      });
  }

  

  getNotes():Observable<Note[]>{
    return this.notes;
  }

  addNote(note:Note){
    this.noteCollection.add(note);
  }

  deleteNote(note:Note){
    //console.log(note.id);
    this.noteDoc = this.afs.doc(`note/${note.id}`);
    this.noteDoc.delete();
  }

  save(note:Note){
    this.noteDoc = this.afs.doc(`note/${note.id}`);
    this.noteDoc.update(note);
  }

  getAllNotes():Observable<Note[]>{
    this.noteCollection = this.afs.collection<Note>('note');
              this.notes = this.noteCollection.snapshotChanges().map(changes => {
                return changes.map( action => {
                  const data = action.payload.doc.data() as Note;
                  data.id = action.payload.doc.id;
                  //console.log(data);
                  return data;
                })
              });
              return this.notes;
  }

}