import { Injectable } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService {

	private recipes: Recipe[] = [
    new Recipe('Chicken tajin',
    	  'Morrocan chicken tajin',
    	  'https://assets.epicurious.com/photos/560ea0997b55306961bfee78/6:4/w_620%2Ch_413/106218.jpg',
    	  [new Ingredient('meat', 2),
    	  new Ingredient('banana', 4)]),
    new Recipe('Chicken',
    	  'Morrocan chicken',
    	  'https://blog.bedbathandbeyond.com/wp-content/uploads/2013/12/Morrocan-Chicken.jpg',
    	  [new Ingredient('buns', 6),
    	  new Ingredient('fries', 4)]),
    new Recipe('Couscous',
    	'Morrocan couscous',
    	'http://www.authenticworldfood.com/data/r3/00000153-00000327.jpg',
    	[new Ingredient('burger', 2),
    	new Ingredient('potatos', 5)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
  	return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
