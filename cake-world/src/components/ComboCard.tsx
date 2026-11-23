import ImagePlaceholder from './ImagePlaceholder'
import PriceTag from './PriceTag'
import { btnPrimary } from './ui'
import { useEnquiry } from '../context/EnquiryContext'
import type { Combo } from '../types'

export default function ComboCard({ combo }: { combo: Combo }) {
  const { openEnquiry } = useEnquiry()
  return (
    <article className="flex flex-col rounded-3xl border border-gold/20 bg-white p-3 shadow-soft">
      <ImagePlaceholder aspectRatio="4 / 3" src={combo.imagePath} alt={combo.name} label="Combo Image" />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="text-lg font-semibold">{combo.name}</h3>
        <p className="mt-1 text-sm text-muted">{combo.description}</p>
        <PriceTag className="mt-3" price={combo.price} originalPrice={combo.originalPrice} />
        <button
          type="button"
          className={`${btnPrimary} mt-4 self-start`}
          onClick={() => openEnquiry({ name: combo.name, price: combo.price, imagePath: combo.imagePath })}
        >
          Enquire
        </button>
      </div>
    </article>
  )
}
