import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardHeader, IonCard],
})
export class ProductCardComponent implements OnInit {
  constructor(private readonly AlertController: AlertController) {}

  ngOnInit() {}

  unitsPerProduct: number = 0;
  productPrice: number = 329;
  total: number = this.productPrice;

  alertState: boolean = false;

  incrementsUnitsPerProduct() {
    this.unitsPerProduct++;
  }

  decrementsUnitsPerProduct() {
    this.unitsPerProduct--;
    if (this.unitsPerProduct <= 0) {
      this.unitsPerProduct = 0;
    }
  }

  async makesTheOrder() {
    const alert = await this.AlertController.create({
      message:
        'Ha agregado correctamente el producto a su carrito.' +
        'Total: Lps. ' +
        this.total * this.unitsPerProduct,
      buttons: [
        {
          text: 'Aceptar',
        },
      ],
    });

    await alert.present();
  }
}
