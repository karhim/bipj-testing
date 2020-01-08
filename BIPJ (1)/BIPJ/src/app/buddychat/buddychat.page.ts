import { Component, OnInit, NgZone, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChatProvider } from 'src/providers/chat';
import { LoadingController, Events, } from '@ionic/angular';
import * as firebase from 'firebase';


@Component({
  selector: 'app-buddychat',
  templateUrl: './buddychat.page.html',
  styleUrls: ['./buddychat.page.scss'],
})
export class BuddychatPage{
  
  // @ViewChild('content') content: ContentChild;
  buddy: any;
  newmessage;
  allmessages = [];
  photoURL;
  imgornot;
  
  constructor(public router: Router, public chatservice: ChatProvider,
    public events: Events, public zone: NgZone, public loadingCtrl: LoadingController
    ) {
    this.buddy = this.chatservice.buddy;
    this.photoURL = firebase.auth().currentUser.photoURL;
    // this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.imgornot = [];
      this.zone.run(() => {
        this.allmessages = this.chatservice.buddymessages;
        for (var key in this.allmessages) {
          if (this.allmessages[key].message.substring(0, 4) == 'http')
            this.imgornot.push(true);
          else
            this.imgornot.push(false);
        }
      })
      
      
    })
  }

  addmessage() {
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      // this.content.scrollToBottom();
      this.newmessage = '';
    })
  }

  ionViewDidEnter() {
    this.chatservice.getbuddymessages();
  }

  // scrollto() {
  //   setTimeout(() => {
  //     this.content.scrollToBottom();
  //   }, 1000);
  // }

  // sendPicMsg() {
  //   let loader = this.loadingCtrl.create({
  //     content: 'Please wait'
  //   });
  //   loader.present();
  //   this.imgstore.picmsgstore().then((imgurl) => {
  //     loader.dismiss();
  //     this.chatservice.addnewmessage(imgurl).then(() => {
  //       this.scrollto();
  //       this.newmessage = '';
  //     })
  //   }).catch((err) => {
  //     alert(err);
  //     loader.dismiss();
  //   })
  // }

  

  

}
