## Custom Pipes

We can create custom pipes using the `ng g pipe <pipe-name>` command in the terminal with the Angular CLI.

**For example**, we create a custom pipe to count words by running the `ng g pipe wordcount` command in the terminal. The CLI creates 2 files - *wordcount.pipe.spec.ts* and *wordcount.pipe.ts* under *src/app* folder and updates the *app.module.ts* file.

**app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Custom Pipe imported here by Angular CLI
import { WordcountPipe } from './wordcount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WordcountPipe  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In *wordcount.pipe.ts* file, we write the logic for word count.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'wordcount'})
export class WordcountPipe implements PipeTransform {
  transform(value: any, args?: any): number {
    return value.trim().split(' ').length;
  }
}
```

* We import the `@Pipe` decorator from the core Angular library. If the Class is decorated with the `@Pipe` decorator, Angular knows that class is a pipe.

* In the `@Pipe` decorator, we define the pipe *name* that used within template expressions. 

* The pipe class implements the **PipeTransform** interface to perform a transformation.

* There is a **transform** method that accepts an input value followed by optional parameters and returns the transformed value.

```typescript
interface PipeTransform {
  transform(value: any, ...args: any[]): any
}
```
In *app.component.html* file,
```html
<p> {{ "Angular is an application design framework" | wordcount}} </p>
<!--output '6' -->
```

We can have additional arguments to the **transform** method for each parameter passed to the pipe.

*Example:*
```typescript
@Pipe({name: 'powerUp'})
export class powerUpPipe implements PipeTransform {
  transform(value: number, power?: number): number {
    return Math.pow(value, isNaN(power) ? 1 : power);
  }
}
```
In *app.component.html* file,
```html
<p> {{ 2 | powerUp }} </p>
<!--output '2' -->
<p> {{ 2 | powerUp : 3}} </p>
<!--output '8' -->
<p> {{ 5 | powerUp : 2}} </p>
<!--output '25' -->
```

## References

* [Angular Docs - Custom Pipes](https://angular.io/guide/pipes#custom-pipes)
* [Custom Pipes](https://codecraft.tv/courses/angular/pipes/custom-pipes/)
