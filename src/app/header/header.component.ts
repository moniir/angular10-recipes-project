import { Component, EventEmitter, Output } from '@angular/core';
import { from } from 'rxjs';

import {} from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {

   @Output() headerSelected = new EventEmitter<string>();

    onSelect(headerItem: string){
        this.headerSelected.emit(headerItem)
        // console.log(headerItem)
    }
}