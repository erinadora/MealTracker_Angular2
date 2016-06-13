import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="editForm">
    <h3 id='edit'>Edit:</h3>
    <input [(ngModel)]="meal.mealName" class="input meal-form"/>
    <input [(ngModel)]="meal.description" class="input meal-form"/>
    <input [(ngModel)]="meal.calories" class="input meal-form"/>
    <br>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
