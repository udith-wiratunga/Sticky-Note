import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../notes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private noteService:NotesService) { }

  ngOnInit() {
  }

   search(titleValue:string){
    this.noteService.search(titleValue);//.subscribe(Notes=>this.Notes=Notes);
  }
}