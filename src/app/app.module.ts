import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Vendor
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from './shared';
import { ComponentsModule } from './shared/components/components.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
