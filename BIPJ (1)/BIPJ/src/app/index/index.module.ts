import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { LoginPage } from '../modals/login/login.page';
import { SignupPage } from '../signup/signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPage, LoginPage, SignupPage],
  entryComponents: [LoginPage, SignupPage]
})
export class IndexPageModule { }
