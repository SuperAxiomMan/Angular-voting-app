import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestaurantModel } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css'],
})
export class RestaurantRankingComponent implements OnChanges {
  @Input()
  restaurants$?: Observable<RestaurantModel[]>;
  sortedRestaurants?: RestaurantModel[];

  constructor() {}

  ngOnChanges(changes: any): void {
    console.log('changes', changes);
    if (changes.restaurants$.currentValue) {
      changes.restaurants$.currentValue
        .pipe(
          map((resto: RestaurantModel[]) => {
            this.sortedRestaurants = resto.sort(this.sortByScore);
          })
        )
        .subscribe();
    }
  }

  sortByScore(a: RestaurantModel, b: RestaurantModel) {
    return a.votes > b.votes ? -1 : 1;
  }
}
