import { Catalog } from "@/components/Catalog";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-full bg-emerald-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <header className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Спортивний магазин
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Smart Catalog
          </h1>
          <p className="max-w-2xl text-zinc-600">
            Теніс, плавання та бокс — знайдіть потрібний товар за назвою або
            категорією.
          </p>
        </header>
        <Catalog products={products} />
      </main>
    </div>
  );
}
