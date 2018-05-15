import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { NgForm } from '@angular/forms'

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }

  onSumbit(form: NgForm) {
    // retrive data with angular
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.slService.editIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.onResetForm()
  }

  onResetForm() {
    this.slForm.reset()
    this.editMode = false
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
