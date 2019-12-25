import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Vendor
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from './shared';
import { ComponentsModule } from './shared/components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
