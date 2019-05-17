import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-sticky-list',
  templateUrl: './sticky-list.component.html',
  styleUrls: ['./sticky-list.component.css']
})

export class StickyListComponent implements OnInit {
  Notes : Note[];

  constructor(private noteService:NotesService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes():void{
     this.noteService.getNotes().subscribe(Notes=>this.Notes=Notes);
  }

  addNote(note:Note):void{
    note={id:this.Notes.length,title:"",description:""}
    this.noteService.addNote(note);
  }

  deleteNote(note:Note):void{
    this.Notes = this.Notes.filter(h => h !== note);
  }
}