import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restaurantService: RestaurantService
  ) {}

  onNoClick() {
    this.dialogRef.close('nope');
  }

  async delete() {
    const res = await this.restaurantService.deleteRestaurant(this.data);
    this.dialogRef.close(res);
  }
}
