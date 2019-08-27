import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from './shared';
import { ComponentsModule } from './shared/component/components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
