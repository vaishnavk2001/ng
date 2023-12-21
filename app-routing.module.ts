import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewFormComponent } from './new-form/new-form.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Contact_us',component:ContactUsComponent},
  {path:'About_us',component:AboutUsComponent},
  {path:'Forms',component:NewFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
