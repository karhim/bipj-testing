import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { usercreds } from 'src/app/models/interfaces/usercreds';
import { AuthProvider } from 'src/providers/auth';
import { Router } from '@angular/router';
import { TabsPage } from 'src/app/tabs/tabs.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {} as usercreds;

  constructor(private modalController: ModalController, private authservice : AuthProvider, private router : Router) { }

  // private navCtrl: NavController,

  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit() {

  }

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.router.navigateByUrl('tabs');
      else
        alert(res);
    })
  }

  signup() {
    this.router.navigateByUrl('');
  }

  passwordreset() {
    this.router.navigateByUrl('');
  }




}
