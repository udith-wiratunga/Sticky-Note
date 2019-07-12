import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../../router.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() UserName:string;

  constructor() { }

  ngOnInit() {
    
  }
  signOut(){
    console.log("LOG OUT"+this.UserName);
  }
  
}