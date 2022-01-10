import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  isVisible = false;

  toggle(){
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit(): void {
  }
  propertyBindingVariable = "Julia Huth";
  inputData : string ="";
}
