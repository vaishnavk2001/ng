import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDfComponent } from './reactive-df/reactive-df.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Contact_us',component:ContactUsComponent},
  {path:'About_us',component:AboutUsComponent},
  {path:'Forms',component:NewFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'reactivedf',component:ReactiveDfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
