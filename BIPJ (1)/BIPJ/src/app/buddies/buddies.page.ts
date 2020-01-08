import { Component, OnInit } from '@angular/core';
import {NavController,AlertController } from '@ionic/angular';

import * as firebase from 'firebase';
import { connreq } from '../models/interfaces/requests';
import { UserProvider } from 'src/providers/user';
import { RequestsProvider } from 'src/providers/requests';


@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.page.html',
  styleUrls: ['./buddies.page.scss'],
})

export class BuddiesPage {
  newrequest = {} as connreq;
  temparr = [];
  filteredusers = [];
  constructor(public navCtrl: NavController,
    public userservice: UserProvider, public alertCtrl: AlertController,
    public requestservice: RequestsProvider) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }

  searchuser(searchbar) {
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }

    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
  
  async sendreq(recipient) {
    this.newrequest.sender = firebase.auth().currentUser.uid;
    this.newrequest.recipient = recipient.uid;
    if (this.newrequest.sender === this.newrequest.recipient)
      alert('You are your friend always');
    else {
      const successalert = await this.alertCtrl.create({
        message: 'Request sent',
        subHeader: 'Your request was sent to ' + recipient.displayName,
        buttons: ['ok']
      });
    
      this.requestservice.sendrequest(this.newrequest).then((res: any) => {
        if (res.success) {
          successalert.present();
          let sentuser = this.filteredusers.indexOf(recipient);
          this.filteredusers.splice(sentuser, 1);
        }
      }).catch((err) => {
        alert(err);
      })
    }
  }


}



