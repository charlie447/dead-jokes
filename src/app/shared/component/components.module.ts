import { NgModule } from '@angular/core';
import { SharedModule } from '../index';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        SharedModule
    ],
    exports:[
        DashboardComponent
    ]
})

export class ComponentsModule {}
