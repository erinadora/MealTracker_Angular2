import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h2 (click)="select()">{{ meal.mealName }}</h2>
  <div *ngIf="detail" class='day'>
    <p id="description">{{ meal.description }}</p>
    <p id="cal"> {{ meal.calories }} <strong>cal</strong></p>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public detail: boolean = false;
  select() {
    this.detail = !this.detail;
  }
}
