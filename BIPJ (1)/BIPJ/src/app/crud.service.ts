import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_listing(record) {
    return this.firestore.collection('listing').add(record);
  }
  read_listing() {
    return this.firestore.collection('listing').snapshotChanges();
  }
  create_follow(){
    
  }
}
