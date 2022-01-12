import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceabcService {
  firstName: string = "billy";
  lastName: string = "bob";
  constructor() { }
  getFullName(): string{
    return this.firstName+this.lastName;
  }
}
