import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit, OnChanges {
	@Input() recipe: Recipe;
	@Input() recipeInfo: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  	console.log('Im changed:' +changes.recipe.currentValue.name);
  }
}
