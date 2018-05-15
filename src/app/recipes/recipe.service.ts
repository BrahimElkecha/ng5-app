import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject'

import * as cheerio from 'cheerio';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    new Recipe(
        'Chicken tajin',
    	  'Morrocan chicken tajin',
    	  'https://assets.epicurious.com/photos/560ea0997b55306961bfee78/6:4/w_620%2Ch_413/106218.jpg',
    	  [new Ingredient('meat', 2), new Ingredient('banana', 4)]
    ),
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

  constructor(private shoppingListService: ShoppingListService,
              private http: Http) {}

  scrapRecipes() {
    return this.http.get(`https://www.hellofresh.com/menus/`);
  }

  getRecipes() {
    this.scrapRecipes().subscribe((response) => {
      const $ = cheerio.load(response.text());
      const posts = $('.fela-fdar8y.fela-1pjkygk .fela-xeffhz .fela-1vac6gd');
      const newposts = posts.toArray()[0];

      newposts.children.map((post) => {
        const title = $(post).find('.fela-4q6xsb').text();
        const description = $(post).find('.fela-1ou4ovv').text();
        const image = $(post).find('.fela-65roq8 img').attr('src');
        const newIngredient = [new Ingredient('burger', 2), new Ingredient('potatos', 5)]

        if(title !== '' && description !== '') {
          const newRecipe = new Recipe(title, description, image, newIngredient)
          this.recipes.push(newRecipe);
        }
      });
      this.recipesChanged.next(this.recipes.slice())
    });
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }
}
