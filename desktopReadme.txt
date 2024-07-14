Steps for Angular Project

How to create a angular project from angular command line ?
------------------------------------------------------------
Go to the folder you want to create the project and open node js from the folder
> ng new typing  ( creating a project named typing )
> cd typing  ( make sure if all the folders are created)
> code .  ( the project will open in visual code)

How to add bulma css to existing a angular project from angular command line ?
-----------------------------------------------------------------------------
> npm install bulma
> ng serve

How to deploy Angular app on a server instead of localhost?
-----------------------------------------------------------
This is a free service just to show employers about your work.
open in browser now.sho for documentation and you need an email for account activation

npm install -g vercel
now login 
It will ask for eamil and you will get an email for activation, once you activate 
now ( just run now command, it will ask few questios and deploy)
After it is deployed it will give you an url
https://vercel.com/r14141-gmailcom/typing-mlbcxibub-sridhars-projects/a48ee615





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
### Directives

### Structural directives: Adds are removes HTML elements  eg. 
<div *ngIf="length">
 <p> hide if length is false</p> 
</div>

### Attribute directives: changes the properties of the HTMl element it gets applied to
<label appStrikethrough>
<input type="checkbox"/>
 UseLetters
 </label>

 ### Things to remember / Take away notes

### *ngIF , *ngFor are directives and they start with *
### @selector, @Input are decorators and they start with @

