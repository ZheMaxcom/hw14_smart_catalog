import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number): string {
  const digits = Math.round(price).toString();
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped} ₴`;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-emerald-700">{product.category}</p>
      <h2 className="mt-2 text-lg font-semibold text-zinc-900">{product.name}</h2>
      <p className="mt-3 text-xl font-bold text-zinc-900">
        {formatPrice(product.price)}
      </p>
      <p
        className={`mt-auto pt-4 text-sm font-medium ${
          product.inStock ? "text-emerald-700" : "text-zinc-500"
        }`}
      >
        {product.inStock ? "В наявності" : "Немає в наявності"}
      </p>
    </article>
  );
}
