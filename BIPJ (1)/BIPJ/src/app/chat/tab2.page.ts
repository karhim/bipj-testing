import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Events, AlertController } from '@ionic/angular';
import { RequestsProvider } from 'src/providers/requests';
import { ChatProvider } from 'src/providers/chat';
import { UserProvider } from 'src/providers/user';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myrequests;
  myfriends;
  myusers;
  temparr = [];
  filteredusers = [];

  constructor(public router: Router, public requestservice: RequestsProvider,
    public events: Events, public alertCtrl: AlertController, public chatservice: ChatProvider, public userservice: UserProvider) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res.reverse();
      this.temparr = res.reverse();
    })
  }

  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends;
    })

  }

  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
    this.events.unsubscribe('friends');
  }

  addbuddy() {
    this.router.navigateByUrl('buddies');
  }

  accept(item) {
    this.requestservice.acceptrequest(item).then(async () => {
      const newalert = await this.alertCtrl.create({
        message: 'Friend added',
        subHeader: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }

  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {

    }).catch((err) => {
      alert(err);
    })
  }

  buddychat(buddy) {
    this.chatservice.initializebuddy(buddy);
    this.router.navigateByUrl('buddychat');
  }

  

  



  
}

