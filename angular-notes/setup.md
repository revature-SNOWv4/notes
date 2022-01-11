step 1. installing angular
ng i -g @angular/cli

step 2. creating parent folder
create a folder wherever you want to set up angular and navigate to it through cd command line

step 3. generating project
ng new {name of project}

step 4. cd into project

step 5. serve it

ng serve
step 6. start working

open it in vscode and use the cli to create new component, directives, pipes, services, modules etc
example: ng g c {component name} to create a component

step 7: modify the html, ts, and css files of each component

step 8. before we learn routing use the html in the parent component to add components
(eg to add component a we use <app-a></app-a>