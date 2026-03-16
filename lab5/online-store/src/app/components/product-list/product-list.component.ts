import { Component, computed, effect, input, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [NgIf, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly products = input.required<Product[]>();

  private readonly _products = signal<Product[]>([]);
  readonly items = computed(() => this._products());

  readonly showNoProductsMessage = computed(() => this.items().length === 0);

  constructor() {
    effect(() => {
      this._products.set(this.products());
    });
  }

  handleDelete(productId: number): void {
    this._products.update((list) => list.filter((item) => item.id !== productId));
  }

  handleLike(productId: number): void {
    this._products.update((list) =>
      list.map((item) =>
        item.id === productId ? { ...item, likes: item.likes + 1 } : item
      )
    );
  }
}

