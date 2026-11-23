import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { btnPrimary } from '../components/ui'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { usePageMeta } from '../hooks'

const SORTS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
] as const
type SortKey = (typeof SORTS)[number]['value']

const sortedCategories = [...categories].sort((a, b) => a.displayOrder - b.displayOrder)
const filterOptions = [{ id: 'all', slug: 'all', name: 'All Cakes' }, ...sortedCategories]
// Ignore products with missing or invalid data instead of crashing.
const validProducts = products.filter((p) => p && p.name && Number.isFinite(p.price) && p.price >= 0)

export default function CakeCatalogue() {
  usePageMeta(
    'Cake Catalogue | Cake World',
    'Browse Cake World’s homemade birthday, wedding, kids and corporate cakes. Filter by category, sort by price and enquire on WhatsApp.',
  )

  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState<SortKey>('recommended')

  const slug = params.get('category')
  const activeCategory = sortedCategories.find((c) => c.slug === slug)
  const activeSlug = activeCategory?.slug ?? 'all'

  // Unknown category in the URL: fall back to All Cakes and clean the URL.
  useEffect(() => {
    if (slug && !activeCategory) setParams({}, { replace: true })
  }, [slug, activeCategory, setParams])

  const selectCategory = (value: string) => setParams(value === 'all' ? {} : { category: value })

  const visible = useMemo(() => {
    const list = activeCategory ? validProducts.filter((p) => p.categoryId === activeCategory.id) : [...validProducts]
    list.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return a.displayOrder - b.displayOrder
    })
    return list
  }, [activeCategory, sort])

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
      <h1 className="text-4xl font-semibold">Cake catalogue</h1>
      <p className="mt-2 max-w-xl text-muted">Pick a cake and send us an enquiry on WhatsApp. We’ll confirm availability and delivery.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[230px_1fr]">
        <aside>
          <nav aria-label="Cake categories" className="hidden lg:block">
            <ul className="space-y-1">
              {filterOptions.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => selectCategory(c.slug)}
                    aria-current={activeSlug === c.slug ? 'true' : undefined}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeSlug === c.slug ? 'bg-butter text-ink shadow-soft' : 'text-muted hover:bg-sand hover:text-ink'
                    }`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:hidden">
            <label htmlFor="category-select" className="text-sm font-medium">Category</label>
            <select
              id="category-select"
              value={activeSlug}
              onChange={(e) => selectCategory(e.target.value)}
              className="mt-1.5 w-full rounded-2xl border border-gold/50 bg-white px-4 py-3 text-sm"
            >
              {filterOptions.map((c) => (
                <option key={c.id} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>
        </aside>

        <section aria-label="Cakes">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <p className="text-sm text-muted" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'cake' : 'cakes'}
              {activeCategory ? ` in ${activeCategory.name}` : ''}
            </p>
            <div>
              <label htmlFor="sort-select" className="mr-2 text-sm font-medium">Sort by</label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-2xl border border-gold/50 bg-white px-4 py-2.5 text-sm"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div role="status" className="rounded-3xl border border-dashed border-gold/50 bg-sand px-6 py-14 text-center">
              <h2 className="text-2xl font-semibold">No cakes here yet</h2>
              <p className="mx-auto mt-2 max-w-sm text-muted">We’re still adding cakes to this category. Have a look at everything else we bake.</p>
              <button type="button" onClick={() => selectCategory('all')} className={`${btnPrimary} mt-6`}>Back to all cakes</button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
