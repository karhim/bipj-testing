import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginPage} from '../modals/login/login.page';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private modalController: ModalController) { }

async openModal(){
  const modal = await this.modalController.create({
    component: LoginPage
  });
  return await modal.present();
}

async openModal2(){
  const modal = await this.modalController.create({
    component: SignupPage
  });
  return await modal.present();
}

  ngOnInit() {
  }

}
