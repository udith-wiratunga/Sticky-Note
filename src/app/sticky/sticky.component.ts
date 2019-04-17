import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyNoteComponent implements OnInit {
  @Input() note:Note;
  constructor() { }

  ngOnInit() {
  }

}