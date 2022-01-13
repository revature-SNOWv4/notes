import { Component, OnInit } from '@angular/core';
import { CurrentPokemonService } from 'src/app/services/current-pokemon.service';
import { PokeServiceService } from 'src/app/services/poke-service.service';
// import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private currentPokeServ: CurrentPokemonService, private pokeService: PokeServiceService) { }
  myPoke:string ="";
  myUrl:string="";
  myPokeObject:any="";
  myImg: string = "";
  // ngOnInit is a lifecycle hook:
  // meaning that at certain points of the lifetime of a component, an appropriate hook is called
  // (onInit, onUpdate, onDestroy)
  // provided that we import and implement OnInit etc
  ngOnInit(): void {
    this.myPoke = this.currentPokeServ.getName();
    this.myUrl = this.currentPokeServ.getUrl();
    this.pokeService.getSinglePokemon(this.myUrl).subscribe(poke => 
      {this.myPokeObject=poke;
    this.myImg=poke.sprites.front_default
  });
    console.log(this.myPokeObject);
  }

}
