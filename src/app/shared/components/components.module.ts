import { NgModule } from '@angular/core';
import { SharedModule } from '../index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,
        JokeCardComponent,
        NavbarComponent,

    ],
    imports: [
        SharedModule
    ],
    exports:[
        DashboardComponent,
        FooterComponent,
        JokeCardComponent,
        NavbarComponent,
    ]
})

export class ComponentsModule {}
