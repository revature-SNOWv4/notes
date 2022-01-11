import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  isVisible = false;
  myArr: Array<Number> = [0,1,2,3,4];
  toggle(){
    this.isVisible = !this.isVisible;
  }
  createAlert(){
    alert("alert");
  }

  constructor() { }

  ngOnInit(): void {
  }
  propertyBindingVariable = "Julia Huth";
  inputData : string ="";
  currentClasses : Object = {
    'special': false,
    'very-special': true,
    'super-special' : false
  }
  currentStyles: object = {
    'background-color':'pink',
    'color':'blue',
    'padding':'20px'

  }
}