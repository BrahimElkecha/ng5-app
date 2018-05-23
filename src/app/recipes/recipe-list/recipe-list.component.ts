import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'
import { Response } from '@angular/http'

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'
import { DataStorageService } from '../../shared/data-storage.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  appName = this.recipeService.getAppName();

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.getRecipes();

    /*this.recipeService.getRecipes()
      .subscribe((recipes: any[]) => {
        this.recipeService.setRecipes(recipes)
        this.recipes = recipes
      })*/

    this.subscription = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) =>{
        this.recipes = recipes
      })
  }

  goToNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
