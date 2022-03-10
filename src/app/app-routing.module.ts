import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadLinesComponent } from './tophead-lines/tophead-lines.component';

const routes: Routes = [
  {path:'',component:TopheadLinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
