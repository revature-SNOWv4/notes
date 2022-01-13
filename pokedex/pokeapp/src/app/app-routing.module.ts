import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchComponent } from './pages/search/search.component';

/*steps to routing:
1. have an approutingmodule (create new angular project or search how to add things correctly)
2. create a component for each route
3. add your page paths to the routes array variable
4. add <router-outlet> to app.component.html*/

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