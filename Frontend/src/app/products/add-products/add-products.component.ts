import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})

export class AddProductsComponent {
  constructor(private service:ProductService){}

  product = new FormGroup({
    productName: new FormControl('Fridge'),
    brandName: new FormControl('LG'),
    price: new FormControl(10000),
  });

  addProductDetails() {
    console.log('Form generated', this.product.value);
    this.service.saveProductDetails(this.product.value).subscribe( (response) => {
      console.log(response);
    })
  }
}
