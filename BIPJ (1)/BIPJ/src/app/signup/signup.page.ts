import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserProvider } from 'src/providers/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  newuser = {
    email: '',
    password: '',
    displayName: ''
  }
  constructor(public router: Router, public navParams: NavParams, public userservice: UserProvider,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
     
    }
    else if (this.newuser.password.length < 7) {
     
    }
    else {
      let loader = this.loadingCtrl.create({
        message: 'Please wait'
      });
      
      this.userservice.adduser(this.newuser).then((res: any) => {
        
        if (res.success)
          this.router.navigateByUrl('chat');
        else
          alert('Error' + res);
      })
    }
  }  

  goback() {
    this.router.navigateByUrl('login');
  }

}
