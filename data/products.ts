import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Тенісна ракетка Wilson Pro Staff",
    price: 4299,
    oldPrice: 5499,
    category: "Теніс",
    inStock: true,
  },
  {
    id: 2,
    name: "Набір тенісних м'ячів Dunlop",
    price: 349,
    category: "Теніс",
    inStock: true,
  },
  {
    id: 3,
    name: "Тенісна сумка Head Tour",
    price: 1899,
    category: "Теніс",
    inStock: false,
  },
  {
    id: 4,
    name: "Окуляри для плавання Speedo",
    price: 799,
    oldPrice: 1099,
    category: "Плавання",
    inStock: true,
  },
  {
    id: 5,
    name: "Шапочка для плавання Arena",
    price: 299,
    category: "Плавання",
    inStock: true,
  },
  {
    id: 6,
    name: "Дошка для плавання Finis",
    price: 549,
    category: "Плавання",
    inStock: true,
  },
  {
    id: 7,
    name: "Боксерські рукавиці Everlast",
    price: 2499,
    category: "Бокс",
    inStock: false,
  },
  {
    id: 8,
    name: "Скакалка для боксу RDX",
    price: 399,
    category: "Бокс",
    inStock: true,
  },
];
