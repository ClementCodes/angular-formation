import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';



import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    FaceSnapsModule
  ],


  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
