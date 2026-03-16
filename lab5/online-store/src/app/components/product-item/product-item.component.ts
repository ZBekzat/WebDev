import { Component, computed, input, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly delete = output<number>();
  readonly like = output<number>();

  private readonly selectedImageIndex = signal(0);

  readonly currentImage = computed(() => {
    const images = this.product().images;
    const index = this.selectedImageIndex();
    return images[index] ?? this.product().image;
  });

  readonly stars = computed(() => {
    const fullStars = Math.floor(this.product().rating);
    return Array.from({ length: 5 }, (_, idx) => idx < fullStars);
  });

  isSelected(index: number): boolean {
    return this.selectedImageIndex() === index;
  }

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  incrementLikes(): void {
    this.like.emit(this.product().id);
  }

  requestDelete(): void {
    this.delete.emit(this.product().id);
  }

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement | null;
    if (!target) return;
    // Avoid infinite loop if fallback also errors
    if (target.dataset && target.dataset['fallback'] === 'true') return;
    target.dataset['fallback'] = 'true';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="20">Image unavailable</text></svg>`;
    target.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  shareOnWhatsApp(): void {
    const p = this.product();
    const text = `Check out this product: ${p.name} ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const p = this.product();
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }
}

