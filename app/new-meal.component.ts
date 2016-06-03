import { Component, EventEmitter } from 'angular2/core';
import { Meal } from "./meal.model";

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Input Your Meal</h3>
    <input type="text" placeholder="What did you eat?" onfocus="this.placeholder = ''" onblur="this.placeholder = 'What did you eat?'" class="col-sm-4 input-xs" #newName>
    <input type="text" placeholder="Tell me about it" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Tell me about it'" class="col-sm-4 input-xs" #newDescription>
    <input type="text" placeholder="Calories" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Calories'" class="col-sm-4 input-xs" #newCalories>
    <button (click)="addMeal(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement) {

  var newMeal = new Meal(newName.value, newDescription.value, parseInt(newCalories.value));
  this.onSubmitNewMeal.emit(newMeal);
  newName.value = "";
  newDescription.value = "";
  newCalories.value = "";
  }
}
