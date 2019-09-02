import { NgModule } from '@angular/core';
import { SharedModule } from '../index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,

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
