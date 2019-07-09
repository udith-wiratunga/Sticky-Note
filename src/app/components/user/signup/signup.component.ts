import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../../router.animations';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  constructor(public af: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af
      .auth
      .createUserWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['/login'])
      })
      .catch(err => {
        console.log(err);
        this.error = err;
      });   
    }
  }
}