import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipe';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  //recipe is passed from its parent component
  @Input() recipe: Receipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }


}
