import { Component, OnInit } from '@angular/core';
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
  title:string;

  constructor(public af: AngularFireAuth,private router: Router) { }

  ngOnInit() {
    this.title="Hello User";
  }

  logout() {
     this.af.auth.signOut();
     this.router.navigateByUrl('/login');
  }
}