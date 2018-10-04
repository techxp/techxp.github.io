import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';

const appRoutes: Routes = [
  {'path': 'page1', 'component' : Page1Component},
  {'path': 'page2', 'component' : Page2Component},
  {path: '', redirectTo: '/page1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
