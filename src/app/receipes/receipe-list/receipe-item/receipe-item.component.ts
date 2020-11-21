import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../../receipe';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() recipe: Receipe
  constructor() { }

  ngOnInit(): void {
  }

}
