import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()

export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://fa-wasafat.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://fa-wasafat.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json()
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ) // After using mat , ou should not use response again
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        (error: Response) => {
          console.log(error);
        });
  }

  /*postRecipes(recipes: Recipe[]) {
    const headers = new Headers({
      'Content-type': 'application/json'
    })
    return this.http.post('https://http-angular-6c553.firebaseio.com/data.json',
      recipes,
      { headers: headers }
    );
  }*/
}
