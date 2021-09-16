import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

import { ReactiveFormsModule } from '@angular/forms';

//Angular Materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

//firebase import
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import firestoreConfig from 'my-firestore';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { RestaurantRankingComponent } from './restaurant-ranking/restaurant-ranking.component';

@NgModule({
  declarations: [AppComponent, SuggestionFormComponent, SuggestionListComponent, RestaurantRankingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
