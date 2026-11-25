"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

const ALL_CATEGORIES = "Усі";
const SORT_NONE = "Без сортування";
const SORT_CHEAPEST = "Спочатку дешевші";
const SORT_EXPENSIVE = "Спочатку дорожчі";

const sortOptions = [SORT_NONE, SORT_CHEAPEST, SORT_EXPENSIVE] as const;

type SortOption = (typeof sortOptions)[number];

type CatalogProps = {
  products: Product[];
};

function isSortOption(value: string): value is SortOption {
  return sortOptions.some((option) => option === value);
}

export function Catalog({ products }: CatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [sort, setSort] = useState<SortOption>(SORT_NONE);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => product.category)));
    return [ALL_CATEGORIES, ...unique];
  }, [products]);

  const filtersChanged =
    query !== "" || category !== ALL_CATEGORIES || sort !== SORT_NONE;

  function resetFilters() {
    setQuery("");
    setCategory(ALL_CATEGORIES);
    setSort(SORT_NONE);
  }

  const visibleProducts = products
    .filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesCategory =
        category === ALL_CATEGORIES || product.category === category;
      return matchesName && matchesCategory;
    })
    .slice()
    .sort((left, right) => {
      if (sort === SORT_CHEAPEST) {
        return left.price - right.price;
      }
      if (sort === SORT_EXPENSIVE) {
        return right.price - left.price;
      }
      return 0;
    });

  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_220px_240px_auto]">
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
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
          Сортування
          <select
            value={sort}
            onChange={(event) => {
              const nextSort = event.target.value;
              if (isSortOption(nextSort)) {
                setSort(nextSort);
              }
            }}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-base font-normal text-zinc-900 outline-none ring-emerald-600 focus:ring-2"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <button
            type="button"
            onClick={resetFilters}
            disabled={!filtersChanged}
            className="w-full rounded-xl border border-emerald-700 bg-emerald-700 px-4 py-2.5 text-base font-semibold text-white outline-none ring-emerald-600 transition hover:bg-emerald-800 focus:ring-2 disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400 disabled:hover:bg-zinc-100 lg:w-auto"
          >
            Скинути фільтри
          </button>
        </div>
      </div>

      <p className="text-sm font-medium text-zinc-700">
        Знайдено товарів: {visibleProducts.length}
      </p>

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
