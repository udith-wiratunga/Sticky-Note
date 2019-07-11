import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn} from '../../../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;
  
   constructor(public af: AngularFireAuth,private router: Router) {
      this.af.authState.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/members');
          //this.router.navigateByUrl('/list');
        }
      });
    }

  ngOnInit() {
  }

  onSubmit(formData) {
      if(formData.valid) {
        console.log(formData.value);
      this.af
          .auth
          .signInWithEmailAndPassword(formData.value.email, formData.value.password)
          .then(value => {
          console.log('Nice, it worked!');
          this.router.navigate(['/members']);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        console.log(err);
          this.error = err;
      });
      }
    }

}