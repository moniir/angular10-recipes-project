import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes: Receipe[] = [
    new Receipe('A Test Receipe','Test Recipes Description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
