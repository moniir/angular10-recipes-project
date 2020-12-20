import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Receipe>();
  recipes: Receipe[] = [
    new Receipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Receipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Receipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
