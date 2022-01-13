import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  currentPokemon:string = "pikachu";
  constructor(private httpCli: HttpClient) { }
  getAllPokemon(){
    return this.httpCli.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=1181`);
  }
}
