import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: 'landing', component:LandingComponent},
  {path: 'search', component:SearchComponent},
  {path: '', component:LandingComponent},
  {path: '**', component:SearchComponent} 
  // any path not described: like for a 404 page
  /*
    
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }