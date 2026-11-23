import HeroCarousel from '../components/HeroCarousel'
import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'
import TestimonialCard from '../components/TestimonialCard'
import ComboCard from '../components/ComboCard'
import { categories } from '../data/categories'
import { testimonials } from '../data/testimonials'
import { combos } from '../data/combos'
import { usePageMeta } from '../hooks'

const sortedCategories = [...categories].sort((a, b) => a.displayOrder - b.displayOrder)

export default function Home() {
  usePageMeta(
    'Cake World | Homemade Cakes',
    'Premium homemade cakes for birthdays, weddings, kids’ parties and corporate events. Browse Cake World’s catalogue and enquire on WhatsApp.',
  )

  return (
    <>
      <h1 className="sr-only">Cake World: homemade cakes</h1>
      <HeroCarousel />

      <section id="categories" aria-label="Cake categories" className="mx-auto max-w-6xl px-5 pt-16 lg:px-8">
        <SectionHeading title="Find the right cake" subtitle="Choose an occasion to see the cakes we bake for it." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedCategories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      <section aria-label="Customer reviews" className="mx-auto max-w-6xl px-5 pt-16 lg:px-8">
        <SectionHeading title="What customers say" subtitle="Sample reviews are shown until real feedback is added." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <section aria-label="Recommended combos" className="mx-auto max-w-6xl px-5 pt-16 lg:px-8">
        <SectionHeading title="Recommended combos" subtitle="Popular pairings for gatherings of different sizes." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {combos.map((c) => (
            <ComboCard key={c.id} combo={c} />
          ))}
        </div>
      </section>
    </>
  )
}
