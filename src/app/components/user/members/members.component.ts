import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  Username: string = 'User';
  Email:string;
  state: string = '';

  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.authState.subscribe(auth => { 
        if(auth) {
          this.Username=auth.displayName;
          this.Email=auth.email;
          this.router.navigateByUrl('/members');
          //this.router.navigateByUrl('/list');
        }
      });
  }

  logout() {
     this.af.auth.signOut();
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}