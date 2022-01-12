import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { ServiceabcService } from '../serviceabc.service';

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

  constructor(private serviceAbc : ServiceabcService) { }

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
  fName:String = this.serviceAbc.firstName;
  lName:String = this.serviceAbc.lastName;
  fullName:String = this.serviceAbc.getFullName();
}