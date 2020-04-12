import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellat quod dolorem error temporibus delectus laboriosam vitae quae ex aperiam aut iusto unde ut asperiores, similique enim natus molestiae minima fugiat voluptates? Itaque nisi repellendus quis sit repudiandae voluptatem fugiat at, numquam magnam maxime illo veritatis doloremque aperiam rem facilis!'
    },
  ];
  constructor() { }
  getAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => item.id === id); // it will return just 1 occurrence;
  }
}
