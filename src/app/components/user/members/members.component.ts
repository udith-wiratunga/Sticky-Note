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
  Username: string;
  email:string;
  state: string = '';

  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.authState.subscribe(auth => { 
        if(auth) {
          if(auth.displayName)
          {
            this.Username= auth.displayName;
          }
          else
          {
            this.Username= auth.email;
          }
          this.email=auth.email;
          this.router.navigateByUrl('/members');
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