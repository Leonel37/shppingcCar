export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  images:string[];
}

export const products = [
  {
    id: 1,
    name: 'OPPO',
    price: 2000,
    description: 'A large phone with one of the best screens',
    stock: 3,
    images:['OPPO.jpg']
  },
  {
    id: 2,
    name: 'IPhone',
    price: 6,
    description: 'A great phone with one of the best cameras',
    stock: 1,
    images:['aple.png']
  },
  {
    id: 3,
    name: 'Xiami',
    price: 2990,
    description: ' A large phone with one of the best screens',
    stock: 3,
    images:['xiaomi.jpeg']
  },
  {
    id: 3,
    name: 'Huawei',
    price: 2990,
    description: ' A large phone with one of the best screens',
    stock: 3,
    images:['HUAWEI.jpg']
  },

];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
