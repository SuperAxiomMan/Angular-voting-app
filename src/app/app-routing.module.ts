import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [{ path: '', component: SuggestionFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
