## Attribute Directives

Attribute directives are used to change the look and behavior of the DOM elements.There are two built-in attribute directives - **ngClass** and **ngStyle**.

### ngClass Directive

The `[ngClass]` directive is used for adding or removing the CSS classes on an HTML element. It allows us to apply CSS classes dynamically based on expression evaluation. 

**Syntax:** `<some-element [ngClass]="value"> ....</some-element>`

The value can be 
* **string** - the CSS classes declared as string. For example, `<some-element [ngClass]="'first second'">...</some-element>` where `first` and `second` are the two CSS Classes delimited by space. Both the `first` and `second` CSS style will be applied to the element.

* **Array** - the CSS classes declared as Array elements. For example,`<some-element [ngClass]="['first', 'second']">...</some-element>` 

* **Object** - in which *keys* are CSS classes and *values* are expression that  evaluates true or false.  The CSS Class applied to the element when the expression evaluates a truthy value, else they will be removed. For example,`<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>`

**Example:**
The CSS classes in the *app.component.css* file:
```css
.red { 
    background-color: red;
}
.size20 {
    font-size: 20px; 
    font-style: italic;
}
```
Using `[ngClass]` directive in the *app.template.html* file, to add or remove CSS Classes on the element.
```html
<h3 [ngClass]="'red'"> Need your attention</h3>
<div [ngClass]="['red','size20']"> Red Background, Text with Size 20px  </div>
<div [ngClass]="{'red':false,'size20':true}">Text with Size 20px</div>
 ```

### ngStyle Directive

The `[ngStyle]` directive allows us to dynamically change the style of HTML element based on the expression.

**Syntax:** `<some-element [ngStyle]="objExp">...</some-element>`

**Example:**
```html
Enter the username: <input type = 'text' [(ngModel)] = 'name'>
<div [ngStyle]="{'background-color':username === 'Admin' ? 'green' : 'red' }"></<div>
```

### Custom Directives

We can create our custom directives to use in the Angular component with the CLI command `ng generate directive <name of the directive>`.

**For example**, When we run this command `ng generate directive text` in a terminal, the CLI creates *text.directive.ts* file and corresponding test file *text.directive.spec.ts* under *src/app* folder in our application. Also, CLI declares this directive class under *AppModule*.

Lets have a look at text.directive.ts file.
```typescript
import { Directive} from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {
	//You can add custom styling of DOM Elements here....
    constructor() {
    
    }
}
```

Then, you use this directive in the template of the root AppComponent and apply the directive as an attribute. 

For Example: `<p appText> Text inside....</p>`

## References

* [Angular Docs - Attribute directives](https://angular.io/guide/attribute-directives)

