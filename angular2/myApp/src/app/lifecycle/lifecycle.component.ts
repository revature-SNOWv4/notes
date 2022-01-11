import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { }
/*
  @Input()
  valueFromParent: Number = 0;
*/
  ngOnInit(): void {
  }
  // there are functions called hooks that are triggered at some phase of the component lifecycle
  /*
  ngOnChanges()
    -called before ngOnInit and when @input properties change
  ngOnInit()
    -component initialized
  ngDoCheck()
    -called after ngInit and ngOnChanges AND when the properties change within the component
  ngOnDestroy()
*/
}
