import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdComponent } from './std/std.component';
import { StudentRoutingModule } from './student-routing.module';
import { ClsComponent } from './cls/cls.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StdComponent,
    ClsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule

  ]
})
export class StudentModule { }
