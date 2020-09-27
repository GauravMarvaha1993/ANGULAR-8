# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





<!-- ============================ Commands To Start ======================================= -->

ng -version  

sudo npm uninstall -g angular-cli

sudo npm install -g @angular/cli@latest

ng update @angular/core  

npm install bootstrap --save  



<!-- Start the Angular development server using the following command. =============================== -->
ng serve -o  
ng serve
ng s // to run server


<!-- =========== Use the following command to generate 3 Angular Components: ========================= -->

ng g c product-add --skipTests=true  
ng g c product-get --skipTests=true  
ng g c product-edit --skipTests=true  




<!-- If you have installed third-party packages right now, then it is not compatible with Angular 8. To solve the problem between Angular 8 and third-party packages, you have to install the following library. -->
npm install rxjs-compat --save  # ANGULAR-8



// Now, verify and clear the cache by using the following commands.

npm cache verify  


// Clean the cache by using the following command:

npm cache clean


ng serve --host 0.0.0.0 –port 4205



<!-- Create Directives -->

ng g directive changeText


<!-- Create Services -->

ng g service myservice