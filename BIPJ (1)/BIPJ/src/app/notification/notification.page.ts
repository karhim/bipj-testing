import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private crudService: CrudService) { }
  listing: any;
  ngOnInit() {
    this.crudService.read_listing().subscribe(data => {
 
      this.listing = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
         CategoryName: e.payload.doc.data()['Name'],
        };
      })
      console.log(this.listing);
 
    });
  }
  }


