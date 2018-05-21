import { Component } from '@angular/core'
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onStoreData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }


  /*onStoreData() {
    this.recipeService.putRecipes(this.recipeService.getPrivateRecipes())
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
  }

  onFetchData() {
    this.recipeService.getRecipes()
      .subscribe(
        (response: Response) => {
          this.recipeService.setPrivateRecipes(response.json());
        },
        (error) => {
          console.log(error);
        });
  }*/

}
