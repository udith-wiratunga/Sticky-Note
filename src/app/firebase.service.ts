import { Injectable } from '@angular/core';
  const config = {
    apiKey: "AIzaSyAWlKJBHRGvHn9y5CfOOBFyxXWEad4jyOg",
    authDomain: "stickynotedb.firebaseapp.com",
    databaseURL: "https://stickynotedb.firebaseio.com",
    projectId: "stickynotedb",
    storageBucket: "stickynotedb.appspot.com",
    messagingSenderId: "301539775082",
    appId: "1:301539775082:web:20086d3ef23d52d3"
  };
  
@Injectable()
export class FirebaseService {

  //firebase.initializeApp(config);

  constructor() { }

}