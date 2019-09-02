import { NgModule } from '@angular/core';
import { SharedModule } from '../index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { JokeCardComponent } from './joke-card/joke-card.component';


@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,
        JokeCardComponent,

    ],
    imports: [
        SharedModule
    ],
    exports:[
        DashboardComponent,
        FooterComponent
    ]
})

export class ComponentsModule {}
