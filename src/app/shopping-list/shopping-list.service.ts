import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
  new Ingredient('Chicken legs', 4),
  new Ingredient('Tablespoons olive oil', 2),
  new Ingredient('Large onion', 2),
  new Ingredient('Tomatos', 2),
  new Ingredient('Cloves garlic', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   tis.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
  }
}
