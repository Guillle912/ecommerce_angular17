import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/model/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>()
  @Output() addToCartEvent = new EventEmitter<Product>();


  onAddToCart() {
    this.addToCartEvent.emit(this.product());
  }
}
