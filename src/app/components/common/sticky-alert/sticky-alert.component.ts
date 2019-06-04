import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sticky-alert',
  templateUrl: './sticky-alert.component.html',
  styleUrls: ['./sticky-alert.component.css'],
  animations: [
      trigger('state', [
        state('visible', style({
          opacity: '1'
        })),
        state('hidden', style({
          opacity: '0'
        })),
        transition('* => visible', [
          animate('500ms ease-out')
        ]),
        transition('visible => hidden', [
          animate('1000ms ease-out')
        ])
      ])
    ]
})
export class StickyAlertComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isVisible!=this.isVisible
  }

}