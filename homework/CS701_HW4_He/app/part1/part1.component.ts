import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {

  books: any;
  totalPrice: any;

  // check localstorage
  constructor() {
    if (localStorage.He_cart) {
      this.books = JSON.parse(localStorage.getItem('He_cart'));
    } else {
      this.books = [
        {
          title: 'Absolute Java',
          qty: 1,
          unitprice: 114.95
        },
        {
          title: 'Pro HTML5',
          qty: 2,
          unitprice: 27.95
        },
        {
          title: 'Head First HTML5',
          qty: 1,
          unitprice: 27.89
        }
      ];
    }

    // compute the total price in cart
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.totalPrice = 0;
    for (let book of this.books) {
      this.totalPrice += book.unitprice * book.qty;
    }

    this.totalPrice = this.totalPrice.toFixed(2);
    this.books.totalPrice = this.totalPrice;
  }

  addBook(event): void {
    this.books.push({
      title: 'New Book',
      qty: 1,
      unitprice: 10.99
    });
    this.getTotalPrice();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.getTotalPrice();
  }

  saveBook(event): void {
    localStorage.setItem('He_cart', JSON.stringify(this.books));
    this.getTotalPrice();
  }

  ngOnInit() {
  }

}
