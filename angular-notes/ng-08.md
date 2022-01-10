## Angular Directives

Angular directives allow us to manipulate the DOM. The directive is a marker on a DOM element that tells Angular to change the appearance, behavior, and layout of the DOM element and its children.  In Angular, most directives begin with ng, where ng stands for Angular, and extend the HTML. 

### Types of Directive 

There are three kinds of directives in Angular:

1. **Component Directives** - Component directives alter the details of how the component should be processed, instantiated, and used at runtime. 

2. **Structural Directives** - Structural directives are used to manipulate and change the structure of the DOM elements. 

3. **Attribute Directives** - Attribute directives are used to change the look and behavior of the DOM elements.

## Structural directives

Structural directives are used for adding, removing, or manipulating DOM elements. Structural directives start with an asterisk (*) followed by a directive name.  There are three built-in structural directives - **ngIf**, **ngFor** and **ngSwitch**.

### ngIf Directive

The `*ngIf` directive allows us to add or remove DOM Elements based upon the Boolean expression. It doesn't hide the elements, but generally adds or removes them physically from the DOM.

*Example:* 
```html
<p *ngIf="true">
  Expression is true, this paragraph is in DOM.
</p>
<p *ngIf="false">
  Expression is false, this paragraph is not in DOM.
</p>
```
We can also have an **else block** associated with an `*ngIf` directive.

*Example:*
```html
<div *ngIf="5>10; else elseBlock">  
5 is greater than 10....
</div>  
<ng-template #elseBlock>  
10 is greater than 5... 
</ng-template>  
```

### ngFor Directive

 The `*ngFor` directive is used to repeat a part of the HTML template once per each item from an iterable list.

 For example, we can iterate an array items defined in *app.component* class.
 ```typescript
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers : Customer[] = [
    {id : 234 , name: 'John'},
    {id : 235 , name: 'Adam'},
    {id : 236 , name: 'Nick'}
  ];
}
class Customer { 
  id :number;
  name: string;
} 
```
In app. component.html, iterate over the *customers* object using `*ngFor` directive.
```html
<tr *ngFor="let customer of customers;">
  <td>{{customer.id}}</td>
  <td>{{customer.name}}</td>   
</tr>
```

### ngSwitch Directive

The Angular *NgSwitch* has a set of cooperating directives: **NgSwitch**, **NgSwitchCase**, and **NgSwitchDefault**.

The syntax for `ngSwitch` Directive:
```html
<container_element [ngSwitch]="switch_expression">  
    <inner_element *ngSwitchCase="match-1">...</inner_element>  
    <inner_element *ngSwitchCase="match-2">...</inner_element>  
    <inner_element *ngSwitchCase="match-3">...</inner_element>  
    <inner_element *ngSwitchDefault>...</inner_element>  
</container_element>
``` 
*NgSwitch* is an attribute directive that controls the behavior of the other two switch structural directives - *NgSwitchCase* and *NgSwitchDefault*. That's why we write *NgSwitch* as `[ngSwitch]`, *NgSwitchCase* as `*ngSwitchCase`, and *NgSwitchDefault* as `*ngSwitchDefault`.

*NgSwitchCase* displays its element when its value matches the switch value. *NgSwitchDefault* displays its element when no sibling *NgSwitchCase* matches the switch value.

*Example:*
```html
<div class = 'input-num'>
Enter the number<input type='text' [(ngModel)]="num" />
</div>
<div [ngSwitch]="num">
  <div *ngSwitchCase="'1'">You entered - One</div>
  <div *ngSwitchCase="'2'">You entered - Two</div>
  <div *ngSwitchCase="'3'">You entered - Three</div>
  <div *ngSwitchCase="'4'">You entered - Four</div>
  <div *ngSwitchCase="'5'">You entered - Five</div>
  <div *ngSwitchDefault> ...default </div>
</div>
```


### `<ng-template>`  

Structural directives can work with the HTML5 `<ng-template>` element, which is designed to hold template code. 

*Example:*
```html
<ng-template [ngIf]='true'>
  <p>I am the content to show</p>
</ng-template>
```

## References

* [Angular Docs - Structural directives](https://angular.io/guide/structural-directives)
