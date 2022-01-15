import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  

  

  constructor() { }

  ngOnInit(): void {
    const subject=new Subject();
    subject.subscribe({next: (string) => console.log('mouse hears: '+ string)});
    subject.next("bang");
    subject.subscribe({next: (string) => console.log('horse hears: '+ string)});
    subject.next("crash");
    subject.next("bark");
  }
}