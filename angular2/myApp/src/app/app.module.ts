import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildCComponent } from './lifecycle/child-c/child-c.component';
import { PiglatinPipe } from './piglatin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    LifecycleComponent,
    ChildCComponent,
    PiglatinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
