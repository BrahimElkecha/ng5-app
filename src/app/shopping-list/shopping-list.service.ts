import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject'

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  editIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   tis.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
