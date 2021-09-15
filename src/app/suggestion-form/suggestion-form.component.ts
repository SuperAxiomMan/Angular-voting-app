import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';

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
    private restaurantService: RestaurantService
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
    console.log(res.id);
    if(res.id){
      this.message = `Restaurant ${res.id} created`
    }
    this.suggestionForm.reset();
  }
}
