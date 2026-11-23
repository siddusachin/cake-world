import { MessageCircle } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import PriceTag from './PriceTag'
import { btnPrimary, iconBtn } from './ui'
import { useEnquiry } from '../context/EnquiryContext'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
  const { openEnquiry } = useEnquiry()
  const enquire = () => openEnquiry({ name: product.name, price: product.price, imagePath: product.imagePath })

  return (
    <article className="flex flex-col rounded-3xl border border-gold/20 bg-white p-3 shadow-soft transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <ImagePlaceholder aspectRatio="1 / 1" src={product.imagePath} alt={product.name} label="Cake Image" />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{product.description}</p>
        <PriceTag className="mt-3" price={product.price} originalPrice={product.originalPrice} />
        <div className="mt-auto flex items-center gap-2 pt-4">
          <button type="button" onClick={enquire} className={`${btnPrimary} flex-1`}>Enquire</button>
          <button type="button" onClick={enquire} className={iconBtn} aria-label={`Enquire about ${product.name} on WhatsApp`}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
