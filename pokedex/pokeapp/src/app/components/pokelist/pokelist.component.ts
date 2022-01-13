import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokeArr : Array<any> = [];
  constructor(private pokeServ: PokeServiceService) { }

  ngOnInit(): void {
    this.pokeServ.getAllPokemon().subscribe(list => {
      this.pokeArr = list.results;
      console.log(this.pokeArr);
    })
  }

}
