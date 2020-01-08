import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  listing: any;
  categoryname:string;

  constructor(private crudService: CrudService) { }

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

  CreateRecord() {
    let record = {};
    record['Name'] = this.categoryname  ;
    this.crudService.create_listing(record).then(resp => {
      this.categoryname = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  follow(){
    
  }

}
