import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDfComponent } from './reactive-df/reactive-df.component';
import { EmpModule } from './emp/emp.module';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Contact_us',component:ContactUsComponent},
  {path:'Forms',component:NewFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'reactivedf',component:ReactiveDfComponent},
  {path:'About_us',component:AboutUsComponent},
  {path:'',redirectTo:'About_us',pathMatch:'full'},
  {path:'emp1',loadChildren:()=>import('./emp/emp.module').then(m=>m.EmpModule) },
  {path:'student',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)}, 
  {path:'service',component:ServicesComponent},
  {path:'product',component:ProductComponent},
  {path:'view_product',component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
