import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyNoteComponent implements OnInit {
  @Input() note:Note;
  @Output() noteEvent = new EventEmitter<Note>();
  @Output() saveEvent = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(note:Note):void{
    this.noteEvent.emit(this.note);
  }

  onSave(note:Note):void{
    this.note=note;
    this.saveEvent.emit(this.note);
  }


}