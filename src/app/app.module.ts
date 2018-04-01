import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'  // ngModel not working without it


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { IfElseComponent } from './if-else/if-else.component';
import { HtmlToComponentComponent } from './html-to-component/html-to-component.component';
import { ColorChangeDirective } from './directives/color-change.directive';
import { NgSwichComponent } from './ng-swich/ng-swich.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    IfElseComponent,
    HtmlToComponentComponent,
    ColorChangeDirective,
    NgSwichComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ngModel not working without it
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
