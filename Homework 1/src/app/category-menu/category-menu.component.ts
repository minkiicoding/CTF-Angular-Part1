import { Component } from '@angular/core';

@Component({
    selector: 'app-category-menu',
    templateUrl: './category-menu.component.html',
    styleUrls: ['./category-menu.component.css'],
})
export class CategoryMenuComponent {
    items: string[] = ['โค้ดส่งฟรี', 'แบรนด์แท้ถูกชัวร์', 'Electronics Zone Free Coins*', 'Gamer Zone', 'Fashion Zone Free Shipping', 'Shopee Mart Free 100 Coins*', 'Coin Rewards', 'โค้ดส่วนลด', '', ''];
}