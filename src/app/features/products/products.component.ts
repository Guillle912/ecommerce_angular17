import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductService } from '@api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private readonly productSvc = inject(ProductService);
  products = this.productSvc.products;
}
