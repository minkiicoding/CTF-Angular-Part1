import { Component } from '@angular/core';
@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css'],

})
export class MainContentComponent {
    items: string[] = ['Samsung Galaxy Tab A',  'iPhone X', 'Smart Android LE', 'ASUS ZEN'];
}