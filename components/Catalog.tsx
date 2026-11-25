"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

const ALL_CATEGORIES = "Усі";

type CatalogProps = {
  products: Product[];
};

export function Catalog({ products }: CatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => product.category)));
    return [ALL_CATEGORIES, ...unique];
  }, [products]);

  const visibleProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesCategory =
      category === ALL_CATEGORIES || product.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
          Пошук за назвою
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Наприклад, ракетка"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-base font-normal text-zinc-900 outline-none ring-emerald-600 placeholder:text-zinc-400 focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
          Категорія
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-base font-normal text-zinc-900 outline-none ring-emerald-600 focus:ring-2"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {visibleProducts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-zinc-300 bg-white px-4 py-10 text-center text-zinc-600">
          Товарів не знайдено
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
