import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestaurantModel } from '../models/restaurant.model';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css'],
})
export class RestaurantRankingComponent implements OnChanges {
  @Input()
  restaurants$?: Observable<RestaurantModel[]>;
  sortedRestaurants?: RestaurantModel[];
  modalResult: any;

  constructor(public dialog: MatDialog) {}

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

  pluralizeResultString(resto: RestaurantModel) {
    // return `${resto.votes} vote${resto.votes > 1 ? 's' : ''} for ${resto.name}`;
    return `${resto.name} - ${resto.votes} vote${resto.votes > 1 ? 's' : ''}`;
  }

  onSelectionChange(event: MatSelectionListChange) {
    console.log(event.source._value?.toString());
  }

  openModal(resto: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: { ...resto },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.modalResult = res;
      console.log('openDialog.AfterClose', this.modalResult);
    });
  }

  confirmModal(resto: any) {
    this.openModal(resto);
  }
}
