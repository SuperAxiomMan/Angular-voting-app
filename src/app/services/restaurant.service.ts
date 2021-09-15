import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { RestaurantModel } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private afs: AngularFirestore) {}

  createRestaurant(name: string) {
    return this.afs
      .collection('wte-restaurants')
      .add({ name, createdAt: Date.now(), votes: 0 });
  }

  readRestaurant() {
    return this.afs.collection<RestaurantModel>('wte-restaurants');
  }
}
