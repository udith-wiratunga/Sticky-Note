//https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NotesService } from '../notes.service';
import { Note } from '../note';

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
  

  constructor(private noteService:NotesService) { }

  ngOnInit() {
    this.getNotes();
    this.noteService.searchObservable.subscribe(n => this.Notes = n);
  }

  getNotes():void{
     this.noteService.getNotes().subscribe(Notes=>this.Notes=Notes);
  }

  addNote(note:Note):void{
    note={noteId:this.Notes.length+1,title:"",description:""}
    this.noteService.addNote(note);
  }

  deleteNote($event):void{
    this.note=$event;
    this.noteService.deleteNote(this.note).subscribe(Notes=>this.Notes=Notes);
  }

  save($event):void{
    this.note=$event;
    this.noteService.save(this.note).subscribe(Notes=>this.Notes=Notes);
  }
}