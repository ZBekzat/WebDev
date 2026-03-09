import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 128GB',
      description: 'Latest generation Apple smartphone with dynamic island and strong camera performance. Great option for everyday use and content creation.',
      price: 405002,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 8/256GB',
      description: 'Compact Android flagship with bright AMOLED display and AI-assisted camera features. Smooth experience for work and entertainment.',
      price: 324537,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h6d/84963273867294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/hbb/84963114385438.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro 12/512GB',
      description: 'Balanced phone with high resolution camera and good battery life. Strong value for students and professionals.',
      price: 178273,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p00/33081235.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p00/33081235.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/p00/33081236.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p32/p00/33081237.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-12-gb-512-gb-chernyi-116684101/?c=750000000'
    },
    {
      id: 4,
      name: 'MacBook Air 13 M2 8/256',
      description: 'Lightweight notebook with Apple silicon, long battery life and silent operation. Good for development, study and everyday work.',
      price: 565544,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    {
      id: 5,
      name: 'ASUS TUF Gaming A15 16/512',
      description: 'Gaming laptop with solid cooling and strong performance in popular online games. Useful for both gaming and programming tasks.',
      price: 599990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/pc8/21971136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/pc8/21971137.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nur-lp127-15-6-16-gb-ssd-512-gb-bez-os-90nr0jp5-m007s0-133912996/?c=750000000'
    },
    {
      id: 6,
      name: 'Sony PlayStation 5 Slim',
      description: 'Current generation console for AAA gaming with high frame rate and fast loading. Suitable for family and multiplayer gaming.',
      price: 305000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 7,
      name: 'Apple AirPods Pro 2',
      description: 'Premium in-ear headphones with active noise cancellation and transparent mode. Very convenient for commuting and calls.',
      price: 108990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-c-usb-c-belyi-113677582/'
    },
    {
      id: 8,
      name: 'Dyson V15 Detect',
      description: 'Cordless vacuum cleaner with high suction power and laser dust detection. Good option for deep apartment cleaning.',
      price: 346941,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h72/85625410420766.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h72/85625410420766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h82/85625410453534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hfb/85625410551838.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000'
    },
    {
      id: 9,
      name: 'LG OLED55C3 TV',
      description: 'High-contrast OLED TV with 4K image and modern smart features. Great choice for movies and console gaming.',
      price: 679990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p57/39159354.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/p57/39159354.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/hf5/86202406764574.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc8/86202406961182.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled48b5rla-122-sm-chernyi-138800384/?c=750000000'
    },
    {
      id: 10,
      name: 'JBL Charge 5 Bluetooth Speaker',
      description: 'Portable speaker with powerful sound and water resistant body. Suitable for outdoor trips and home parties.',
      price: 69998,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hf7/64336001957918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h83/hd5/64336004808734.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-chernyi-101605350/?c=750000000'
    }
  ];
}

