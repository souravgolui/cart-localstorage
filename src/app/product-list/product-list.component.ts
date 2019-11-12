import { Component, OnInit } from '@angular/core';

export const productList = [
  {
    id: 1,
    // tslint:disable-next-line: max-line-length
    imgUrl: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    name: 'CHECK PRINT SHIRT',
    price: 110
  },
  {
    id: 1,
    // tslint:disable-next-line: max-line-length
    imgUrl: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: 'GLORIA HIGH LOGO SNEAKER',
    price: 91
  },
  {
    id: 1,
    // tslint:disable-next-line: max-line-length
    imgUrl: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: 'CATE RIGID BAG',
    price: 94.5
  },
  {
    id: 1,
    imgUrl: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    name: 'GUESS CONNECT WATCH',
    price: 438.9
  },
  {
    id: 1,
    // tslint:disable-next-line: max-line-length
    imgUrl: 'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: '\'70s RETRO GLAM KEFIAH',
    price: 20
  }
];


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: any[];
  cart: any[];
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }

    this.productList = productList;
  }

  addToCart(item: any) {
    Object.assign(item, {qty: 1});
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
