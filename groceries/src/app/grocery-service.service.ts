import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {


  items = [];



  constructor() {
    console.log("Hello GroceryService Provider")
  }

  addItem(item) {
    this.items.push(item);
  }
  
  editItem(item, index) {
    this.items[index]=item;
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

}
