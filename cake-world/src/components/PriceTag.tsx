import { formatPrice } from '../utils/format'

interface Props {
  price: number
  originalPrice?: number
  prefix?: string
  className?: string
}

export default function PriceTag({ price, originalPrice, prefix, className = '' }: Props) {
  return (
    <p className={`flex flex-wrap items-baseline gap-x-2 ${className}`}>
      {prefix && <span className="text-sm text-muted">{prefix}</span>}
      <span className="text-lg font-semibold text-ink">{formatPrice(price)}</span>
      {originalPrice !== undefined && originalPrice > price && (
        <s className="text-sm text-muted">
          <span className="sr-only">Original price </span>
          {formatPrice(originalPrice)}
        </s>
      )}
    </p>
  )
}
