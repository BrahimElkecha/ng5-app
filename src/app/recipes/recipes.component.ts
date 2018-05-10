import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  posts = []
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  testOnchange() {
  }
}
