import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../notes.service';
//import { Note } from '../../../note';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title:string;
  //Notes:Note[];
  searchValue:string = '';
  constructor(private noteService:NotesService) { }

  ngOnInit() {
    this.title="Hello Angular";
  }
}