import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[];
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  removeFromCart(index: number) {
    this.cart.slice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
