import { EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
    new Recipe('Chicken tajin', 'Morrocan chicken tajin', 'https://assets.epicurious.com/photos/560ea0997b55306961bfee78/6:4/w_620%2Ch_413/106218.jpg'),
    new Recipe('Chicken', 'Morrocan chicken', 'https://blog.bedbathandbeyond.com/wp-content/uploads/2013/12/Morrocan-Chicken.jpg'),
    new Recipe('Couscous', 'Morrocan couscous', 'http://www.authenticworldfood.com/data/r3/00000153-00000327.jpg')
  ];

  getRecipes() {
  	return this.recipes.slice();
  }
}
