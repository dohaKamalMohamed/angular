import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './myComponent/log-in/log-in.component';
import { HomeComponent } from './myComponent/home/home.component';
import { ForgetPassComponent } from './myComponent/forget-pass/forget-pass.component';
import { ContactComponent } from './myComponent/home/contact/contact.component';
import { ServicesComponent } from './myComponent/home/services/services.component';
import { ClientsComponent } from './myComponent/home/clients/clients.component';

const routes: Routes = [
  {path:'',redirectTo:'/log_in',pathMatch:'full'},
  {path:'log_in',component:LogInComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'',redirectTo:'services',pathMatch:'full'},
    {path:'contact',component:ContactComponent},
    {path:'services',component:ServicesComponent},
    {path:'clients',component:ClientsComponent},
  ]},
  {path:'forget_pass',component:ForgetPassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
