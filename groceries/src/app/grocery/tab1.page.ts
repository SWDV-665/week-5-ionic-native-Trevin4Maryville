import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GroceryService } from '../grocery-service.service';
import { InputDialogService } from '../input-dialog.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController, public dataService: GroceryService, public inputDialogService: InputDialogService) {}

  title = "Grocery List";

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem (item, index) {

      const toast = await this.toastController.create({
      message: item.name.charAt(item.name.length-1)==='s' ? item.name + " were marked as purchased" : item.name + " was marked as purchased",
      duration: 3000,
      icon: "checkmark-circle-outline",
      position: "bottom"
    });
    toast.present();

    this.dataService.removeItem (index);
  }

  editItem(item, index) {

    console.log("This item is being edited", item, index);

    this.inputDialogService.showPrompt(item, index);
  }


  addItem() {
    console.log("An item is being added to the grocery list");
    this.inputDialogService.showPrompt();
  }

}
