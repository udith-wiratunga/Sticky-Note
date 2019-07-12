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
      this.noteService.search(titleValue);    
  }

  onKeydown(event,titleValue:string) {
    console.log(event);
    if (event.key === "Enter") {
      
      this.noteService.search(titleValue);  
    }
}
}