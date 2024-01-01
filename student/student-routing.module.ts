import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdComponent } from './std/std.component';
import { ClsComponent } from './cls/cls.component';


const routes: Routes = [
{path:'std',component:StdComponent},
{path:'cls',component:ClsComponent}
];

@NgModule({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
