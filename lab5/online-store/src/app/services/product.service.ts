import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Audio' },
    { id: 4, name: 'Home & Tech' }
  ];

  // Product list: 4 categories × 5 products = 20 total
  private readonly products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Apple iPhone 15 128GB',
      description:
        'Latest generation Apple smartphone with dynamic island and strong camera performance.',
      price: 405002,
      rating: 4.9,
      likes: 0,
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
      categoryId: 1,
      name: 'Samsung Galaxy S24 8/256GB',
      description:
        'Compact Android flagship with bright AMOLED display and AI-assisted camera features.',
      price: 324537,
      rating: 4.8,
      likes: 0,
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
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13 Pro 12/512GB',
      description:
        'Balanced phone with high resolution camera and good battery life. Strong value for students and professionals.',
      price: 178273,
      rating: 4.8,
      likes: 0,
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
      categoryId: 1,
      name: 'Google Pixel 9a 8 GB/256GB',
      description:
        'Google smartphone with clean Android experience and fast camera processing.',
      price: 359990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p91/40721815.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/p91/40721815.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/p92/40721811.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p91/40721812.jpg?format=gallery-medium'
      ],
      link: 'https://surl.li/vhldxr'
    },
    {
      id: 5,
      categoryId: 1,
      name: 'OnePlus 15 16 GB/512 GB',
      description:
        'High-performance Android phone with fast charging and smooth display.',
      price: 598326,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p06/p9f/78743999.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p9f/78743999.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p58/78744000.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p59/78744003.jpg?format=gallery-medium'
      ],
      link: 'https://surl.lu/cspmqr'
    },
    {
      id: 6,
      categoryId: 2,
      name: 'MacBook Air 13 M2 8/256',
      description:
        'Lightweight notebook with Apple silicon, long battery life and silent operation.',
      price: 565544,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS TUF Gaming A15 16/512',
      description:
        'Gaming laptop with solid cooling and strong performance in popular online games.',
      price: 599990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/pc8/21971135.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/pc8/21971136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/pc8/21971137.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nur-lp127-15-6-16-gb-ssd-512-gb-bez-os-90nr0jp5-m007s0-133912996/?c=750000000'
    },
    {
      id: 8,
      categoryId: 2,
      name: 'DELL XPS 13 9315',
      description:
        'Ultra-thin laptop with high-resolution display and powerful productivity performance.',
      price: 939990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/heb/67343534358558.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/heb/67343534358558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h59/67343536455710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/hd5/67343536717854.jpg?format=gallery-medium'
      ],
      link: 'https://surl.li/gopmez'
    },
    {
      id: 9,
      categoryId: 2,
      name: 'HP Pavilion 15',
      description:
        'Everyday laptop for work and study with reliable performance and decent battery life.',
      price: 439999,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h56/82089387917342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h56/82089387917342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7a/82089388638238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h11/82089389162526.jpg?format=gallery-medium'
      ],
      link: 'https://surl.li/kfesji'
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 3',
      description:
        'Budget-friendly laptop with full HD display and lightweight design for students.',
      price: 212999,
      rating: 4.3,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/pc2/10847918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/pc2/10847918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p31/pc5/10847921.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pc5/10847923.jpg?format=gallery-medium'
      ],
      link: 'https://surl.lt/vcmnto'
    },
    {
      id: 11,
      categoryId: 3,
      name: 'Apple AirPods Pro 2',
      description:
        'Premium in-ear headphones with active noise cancellation and transparent mode.',
      price: 108990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-c-usb-c-belyi-113677582/'
    },
    {
      id: 12,
      categoryId: 3,
      name: 'JBL Charge 5 Bluetooth Speaker',
      description:
        'Portable speaker with powerful sound and water resistant body.',
      price: 69998,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hf7/64336001957918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h83/hd5/64336004808734.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-chernyi-101605350/?c=750000000'
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Sony WH-1000XM5',
      description:
        'Noise cancelling over-ear headphones with excellent sound quality.',
      price: 125118,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pa4/10606242.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pa4/10606243.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/?c=750000000'
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Bose QuietComfort Earbuds II',
      description:
        'True wireless earbuds with great noise cancellation and comfortable fit.',
      price: 110000,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h1f/80117470035998.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h1f/80117470035998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h2c/80117470560286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/h95/80117471084574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-earbuds-ii-belyi-109903769/?c=750000000'
    },
    {
      id: 15,
      categoryId: 3,
      name: 'Sony SRS-XB23',
      description:
        'Durable Bluetooth speaker with extra bass and long battery life.',
      price: 73431,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/had/h2e/63926923952158.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/had/h2e/63926923952158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h85/hf1/63926926344222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h80/63926929358878.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-sony-srs-xb23-sinii-100345546/?c=750000000'
    },
    {
      id: 16,
      categoryId: 4,
      name: 'Dyson V15 Detect',
      description:
        'Cordless vacuum cleaner with high suction power and laser dust detection.',
      price: 346941,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h72/85625410420766.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h72/85625410420766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h82/85625410453534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hfb/85625410551838.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000'
    },
    {
      id: 17,
      categoryId: 4,
      name: 'LG OLED55C3 TV',
      description:
        'High-contrast OLED TV with 4K image and modern smart features.',
      price: 679990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p57/39159354.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/p57/39159354.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/hf5/86202406764574.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc8/86202406961182.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled48b5rla-122-sm-chernyi-138800384/?c=750000000'
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Sony PlayStation 5 Slim',
      description:
        'Current generation console for AAA gaming with high frame rate and fast loading.',
      price: 305000,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9',
      description:
        'Premium Android tablet with AMOLED display and S Pen support.',
      price: 300096,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pae/78315321.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pae/78315325.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzeaskz-11-djuim-8-gb-128-gb-bezhevyi-112504289/?c=750000000'
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Apple iPad 10 Wi‑Fi 64GB',
      description:
        'Reliable tablet for study and media with Apple Pencil support.',
      price: 239985,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p23/78318406.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p23/78318407.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-sinii-107266637/?c=750000000'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    // Return a copy to avoid accidental modifications outside of the service.
    return [...this.products];
  }
}
