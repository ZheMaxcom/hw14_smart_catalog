import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Про магазин — Smart Catalog",
  description: "Години роботи та контакти спортивного магазину Smart Catalog",
};

export default function AboutPage() {
  return (
    <div className="min-h-full bg-emerald-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="w-fit text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline"
        >
          ← До каталогу
        </Link>

        <header className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Спортивний магазин
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Smart Catalog
          </h1>
          <p className="max-w-2xl text-zinc-600">
            Smart Catalog — магазин екіпірування для тенісу, плавання та боксу.
            Тут можна підібрати інвентар для тренувань і змагань: ракетки,
            окуляри, рукавички та аксесуари. У каталозі товари зручно шукати за
            назвою або категорією.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Години роботи</h2>
            <dl className="mt-3 flex flex-col gap-2 text-zinc-600">
              <div className="flex justify-between gap-4">
                <dt>Понеділок–п’ятниця</dt>
                <dd className="font-medium text-zinc-900">10:00–20:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Субота–неділя</dt>
                <dd className="font-medium text-zinc-900">11:00–18:00</dd>
              </div>
            </dl>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Контакти</h2>
            <dl className="mt-3 flex flex-col gap-2 text-zinc-600">
              <div>
                <dt className="text-sm font-medium text-emerald-700">Телефон</dt>
                <dd>+380 99 000-14-00</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-emerald-700">Email</dt>
                <dd>info@smartcatalog.example</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-emerald-700">Адреса</dt>
                <dd>проспект Атлетів, 14, м. Спортград</dd>
              </div>
            </dl>
          </article>
        </section>
      </main>
    </div>
  );
}
