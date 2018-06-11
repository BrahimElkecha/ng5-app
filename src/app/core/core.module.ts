import { NgModule } from '@angular/core';

//import Modules 'imports'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// import componenets 'declrations'
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Services : providers
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, AuthGuardService, DataStorageService, RecipeService, ShoppingListService]
})

export class CoreModule {}
