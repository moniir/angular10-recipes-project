import { Component } from '@angular/core';
import { Receipe } from './receipe';

@Component({
    selector:'app-receipes',
    templateUrl: './receipes.component.html',
    styleUrls:['./receipes.component.css']
})
export class ReceipesComponent {
    selectedRecipe: Receipe;

}