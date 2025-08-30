import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showActions: boolean = true;
  @Output() productSelected = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  onProductSelect(): void {
    this.productSelected.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  getStockClass(): string {
    return this.product.inStock ? 'stock-available' : 'stock-unavailable';
  }

  getRatingStars(): number[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(this.product.rating) ? 1 : 0);
  }

  formatPrice(): string {
    return `$${this.product.price.toFixed(2)}`;
  }
}
