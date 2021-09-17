import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RestaurantModel } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
  restaurantsCollection?: AngularFirestoreCollection<RestaurantModel>;
  restaurants$?: Observable<RestaurantModel[]>;

  constructor(private restaurantService: RestaurantService) {}

  async ngOnInit(): Promise<void> {
    this.restaurantsCollection = await this.restaurantService.readRestaurant();
    this.restaurants$ = this.restaurantsCollection.valueChanges({
      idField: 'id',
    });
  }

  vote(resto: RestaurantModel) {
    console.log('id', resto.id);
    this.restaurantService.addVote(resto);
  }

  unVote(resto: RestaurantModel) {
    console.log('id', resto.id);
    this.restaurantService.removeVote(resto);
  }


  setRankLabel(resto: RestaurantModel) {
    const label =
      resto.votes <= 1 ? `${resto.votes} vote` : `${resto.votes} votes`;
    return label;
  }
}
