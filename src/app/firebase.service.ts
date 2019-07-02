import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FirebaseService {
///https://www.youtube.com/watch?v=cwqeyOFcaoA&list=PLillGF-RfqbaISD5mxDCIjsSYk4jbiXi4&index=2
  //firebase.initializeApp(config);
  noteCollection:AngularFirestoreCollection<note>;
  constructor(public afs:AngularFirestore) { 

  }

}