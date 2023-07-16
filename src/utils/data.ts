import {
  RecentlyBought1,
  RecentlyBought2,
  RecentlyBought3,
  RecentlyBought4,
  RecentlyBought5,
} from 'assets/images';

export interface Product {
  product_id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  discount: number;
  size: string;
  color: string;
  styleNumber: string;
}

export const products: Product[] = [
  {
    product_id: 1,
    name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit',
    brand: 'ELLIATT',
    image: RecentlyBought1,
    price: 38,
    discount: 0,
    size: 'S',
    color: 'Multicolor',
    styleNumber: 'BROR-RRORO',
  },
  {
    product_id: 2,
    name: 'Chevron Flap Crossbody Bag',
    brand: 'ELLIATT',
    image: RecentlyBought2,
    price: 5.77,
    discount: 7.34,
    size: 'S',
    color: 'Multicolor',
    styleNumber: 'BROR-RRORO',
  },
  {
    product_id: 3,
    name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf',
    brand: 'ELLIATT',
    image: RecentlyBought3,
    price: 29,
    discount: 39,
    size: 'S',
    color: 'Multicolor',
    styleNumber: 'BROR-RRORO',
  },
  {
    product_id: 4,
    name: 'Diamante Puff Sleeve Dress - Black',
    brand: 'ELLIATT',
    image: RecentlyBought4,
    price: 45.99,
    discount: 0,
    size: 'S',
    color: 'Multicolor',
    styleNumber: 'BROR-RRORO',
  },
  {
    product_id: 5,
    name: 'Banneth Open Front Formal Dress in Black',
    brand: 'ELLIATT',
    image: RecentlyBought5,
    price: 69,
    discount: 99.95,
    size: 'S',
    color: 'Multicolor',
    styleNumber: 'BROR-RRORO',
  },
];

export default products;
