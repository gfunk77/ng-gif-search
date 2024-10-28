# gif-search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

### Functionality

gif-search is a simple application which populates a list of gifs based on a search term and implements pagination so that you can turn pages to see more results.

You can select a gif which will take you to an un-finished details page but the functionality stops there. I just wanted to showcase two ways to setup search and pagination functionality - RxJs and Signals.

### Variations

There are two branches: main and signals. Main uses **RxJs** to implement the search and pagination where signals uses a **Signals** based approach without RxJs.

### Misc Info

The signal branch has some basic bootstrap styling.

Then main branch is not styled.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
