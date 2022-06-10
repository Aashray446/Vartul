import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnBoardingComponent } from './on-boarding.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', component: OnBoardingComponent,
  children: [
    {path : '', component: LoginComponent },
    {path : 'register' , component : RegisterComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
