## Two-way data binding

In one-way data binding, any changes in the template are not reflected in the component class. To solve this, Angular provides two-way data binding.

Two-way data binding is achieved by combining **property binding** and **event binding** together. 

![](./images/2-way-binding.PNG)



Two-way data binding is useful in data entry forms. The Angular uses the `ngModel` directive to achieve two-way binding on HTML `<form>` elements.  

To use the `ngModel` directive, we need to import the **FormsModule** package into our Angular module. 

**Syntax:**
```html
 <input type="text" name="value" [(ngModel)]="value">
 ```

The `ngModel` directive is placed inside the square & parentheses and assigned to the property in the component class.


**Example**
Import the **FormsModule** in the *app.module.ts* file.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 In *app.component.ts* file, we declare a `name` variable and in *app.component.html* file, we use the `ngModel` directive for two-way binding.

```html
Enter your name: <input type="text" [(ngModel)]='name'><br>
<p>Hello, {{ name }} !!!</p>
```

## References

* [Angular Two-Way Data Binding](https://malcoded.com/posts/angular-data-binding/)
