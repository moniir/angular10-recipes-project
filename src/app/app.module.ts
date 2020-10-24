import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import {ReceipesComponent} from './receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { from } from 'rxjs';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceipesComponent,
    HeaderComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
