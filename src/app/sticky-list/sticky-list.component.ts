//https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
import { Component, OnInit,Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NotesService } from '../notes.service';
import { FirebaseService } from '../firebase.service';
import { Note } from '../note';

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticky-list',
  templateUrl: './sticky-list.component.html',
  styleUrls: ['./sticky-list.component.css'],
  animations: [
      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(700, style({opacity: 1}))
        ]) 
      ])
    ]  
})

export class StickyListComponent implements OnInit {
  Notes : Note[];
  note:Note;
  searchNotes:Note[];
  @Input() UserEmail:string;
  

  constructor(private firebaseService:FirebaseService,private noteService:NotesService) { 
    console.log(this.UserEmail);
    this.noteService.searchObservable.subscribe(Notes=>this.Notes=Notes);
  }

  

  ngOnInit() {
    this.getNotes();
    //this.firebaseService.searchObservable.subscribe(n => this.Notes = n);
  }

  getNotes():void{
     this.firebaseService.getNotes().subscribe(Notes=>this.Notes=Notes);
  }

  addNote(note:Note):void{
    note =  {
              noteId:this.Notes.length+1,
              title:"",
              description:"",
              email:this.UserEmail
            };
    this.firebaseService.addNote(note);
  }

  deleteNote($event):void{
    this.note=$event;
    this.firebaseService.deleteNote(this.note);
  }

  save($event):void{
    this.note=$event;
    this.firebaseService.save(this.note);
  }
}