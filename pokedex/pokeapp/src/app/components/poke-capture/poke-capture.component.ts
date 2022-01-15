import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-poke-capture',
  templateUrl: './poke-capture.component.html',
  styleUrls: ['./poke-capture.component.css']
})
export class PokeCaptureComponent implements OnInit {


  /* what is actually hapenning in a decorator:
    a decorator is a function that takes in the following information
    and changes some of its properties
    for instance: a decorator on a class can make it so the object can not be changed
    after initialization,
    a function can be made into a callback with some additional function calls before it

    .. you don't need to know this,
    a decorator just modifies the behavior of whatever follows
  */

  @Output()
  change: EventEmitter<String> = new EventEmitter<String>();
  
  gotAwayMsg : string  = "it got away";
  constructor() { }

  ngOnInit(): void {
  }
  capture(){
    this.change.emit(this.gotAwayMsg);
    console.log("tried to catch a pokemon");
  }

}
