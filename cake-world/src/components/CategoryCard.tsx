import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'
import PriceTag from './PriceTag'
import { btnSecondary } from './ui'
import type { Category } from '../types'

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="flex flex-col rounded-3xl border border-gold/20 bg-white p-3 shadow-soft">
      <ImagePlaceholder aspectRatio="4 / 3" src={category.imagePath} alt={category.name} label="Category Image" />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <PriceTag className="mt-1" prefix="From" price={category.startingPrice} originalPrice={category.originalStartingPrice} />
        <Link to={`/cakes?category=${category.slug}`} className={`${btnSecondary} mt-4 self-start`}>
          View cakes
        </Link>
      </div>
    </article>
  )
}
