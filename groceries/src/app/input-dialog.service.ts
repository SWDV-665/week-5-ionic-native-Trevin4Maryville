import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from './grocery-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: GroceryService) {
    console.log('Hello InputDialogService Provider')
  }

  async showPrompt (item?, index?) {
    const alert = await this.alertController.create({
      header: item ? "Edit Item" : "Add Item",
      message: item ? "Edit the item on your grocery list" : "Add a new grocery list item",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "ex. Milk",
          value: item ? item.name : null
        },
        {
          name: "quantity",
          type: "number",

          // placeholder: "ex. 1 gal",
          value: item ? item.quantity : null
        }

      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          id: 'cancel-button',
          handler: (cancel_addItem) => {
            console.log("Cancel Button Clicked: "+cancel_addItem);
          }
        }, {
          text: item ? "Save" : "Add",
          id: "done-button",
          handler: item => {
            console.log('Done Button Clicked');
            if (index !== undefined) {
              this.dataService.editItem(item,index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    await alert.present()
  }

}
