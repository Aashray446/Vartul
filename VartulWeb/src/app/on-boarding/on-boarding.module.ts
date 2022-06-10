import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PosterComponent } from './poster/poster.component';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingComponent } from './on-boarding.component';

@NgModule({
  declarations: [
    OnBoardingComponent,
    LoginComponent,
    RegisterComponent,
    PosterComponent,
  ],
  imports: [
    CommonModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
