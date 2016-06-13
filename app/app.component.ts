import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives:[MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list [mealList]="meals" (onMealSelect)=mealWasSelected($event)>
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Chopped salad w/avocado", "It's bikini season.", 350),
      new Meal("Fish tacos","I had to. It's Taco Tuesday.", 500),
      new Meal("Breakfast (eggs) for dinner", "Quick and easy dinnertime recipe.", 450),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
