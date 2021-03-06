import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';// this is needed for http requests
import { NavComponent } from './components/nav/nav.component';
import { DetailsComponent } from './pages/details/details.component';
import { PokecardComponent } from './components/pokecard/pokecard.component' ;
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { FormsModule } from '@angular/forms';
import { PokeCaptureComponent } from './components/poke-capture/poke-capture.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent,
    NavComponent,
    DetailsComponent,
    PokecardComponent,
    PokelistComponent,
    PokeCaptureComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
