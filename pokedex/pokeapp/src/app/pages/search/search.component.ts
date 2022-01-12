import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpCli: HttpClient) { 

  }

  ngOnInit(): void {
  }
  // pokeList: any = this.httpCli.get<any>('http://pokeapi.co/api/vs/pokemon?limit=1181');
}
