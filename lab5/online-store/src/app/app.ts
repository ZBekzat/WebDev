import { Component, computed, inject, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [NgIf, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly productService = inject(ProductService);

  readonly categories: Category[] = this.productService.getCategories();
  private readonly allProducts: Product[] = this.productService.getProducts();

  private readonly _selectedCategoryId = signal<number | null>(null);
  readonly selectedCategoryId = computed(() => this._selectedCategoryId());

  readonly selectedCategory = computed(() =>
    this.categories.find((c) => c.id === this._selectedCategoryId()) ?? null
  );

  readonly filteredProducts = computed(() => {
    const selected = this._selectedCategoryId();
    if (selected === null) {
      return this.allProducts;
    }
    return this.allProducts.filter((product) => product.categoryId === selected);
  });

  readonly showWelcomeMessage = computed(() => this._selectedCategoryId() === null);

  selectCategory(categoryId: number): void {
    this._selectedCategoryId.set(categoryId);
  }

  resetCategory(): void {
    this._selectedCategoryId.set(null);
  }
}
