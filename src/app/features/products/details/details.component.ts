import { Component, Input, OnInit, Signal, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '@api/products.service';
import { Product } from '@shared/model/product.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  @Input({ alias: 'id'}) productId!: number;
  private readonly productsSvc = inject(ProductService);

  product!: Signal<Product | undefined >

  ngOnInit(): void {
    this.product =  this.productsSvc.getProductsById(this.productId)

  }

  onAddToCart(){

  }
}
