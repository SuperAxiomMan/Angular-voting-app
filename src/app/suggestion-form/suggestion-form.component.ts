import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  async addRestaurant() {
    console.log(this.suggestionForm.value);
    const res = await this.restaurantService.createRestaurant(
      this.suggestionForm.value.name
    );
    console.log(res);
    if(res.id){
      this.snackBar.open(`Restaurant ${this.suggestionForm.value.name} created`,'close');
    }
    this.suggestionForm.reset();

  }
}
