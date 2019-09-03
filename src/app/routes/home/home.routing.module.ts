import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dead Jokes | Home Sweet Home'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
