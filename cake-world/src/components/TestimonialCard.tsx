import { Star, User } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import type { Testimonial } from '../types'

export default function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-gold/20 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div role="img" aria-label={`${t.rating} out of 5 stars`} className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className={`h-4 w-4 ${n <= t.rating ? 'fill-gold text-gold' : 'text-gold/40'}`} aria-hidden="true" />
          ))}
        </div>
        {t.isSample && <span className="rounded-full bg-butter px-3 py-1 text-xs font-medium text-ink">Sample review</span>}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">{t.review}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        {t.imagePath ? (
          <ImagePlaceholder aspectRatio="1 / 1" className="!w-10 !rounded-full" src={t.imagePath} alt={t.customerName} compact />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-butter text-ink">
            <User className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        <span className="text-sm font-semibold">{t.customerName}</span>
      </figcaption>
    </figure>
  )
}
