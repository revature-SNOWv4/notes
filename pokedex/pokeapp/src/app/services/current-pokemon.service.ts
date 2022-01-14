import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPokemonService {
  currentPokemon:string = "";
  currentUrl:string = "";

  constructor() { }
  setName(name:string){
    this.currentPokemon=name;
  }

  getName():string{
    return this.currentPokemon;
  }

  setUrl(url:string){
    this.currentUrl=url;
  }

  getUrl():string{
    return this.currentUrl;
  }

}
