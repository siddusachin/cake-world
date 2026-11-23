import { useEffect, useState } from 'react'
import { ImageIcon } from 'lucide-react'

interface Props {
  aspectRatio?: string
  className?: string
  label?: string
  src?: string
  alt?: string
  compact?: boolean
  loading?: 'lazy' | 'eager'
}

/** Shows the real image when `src` loads, otherwise a tidy placeholder with a reserved aspect ratio. */
export default function ImagePlaceholder({
  aspectRatio = '4 / 3',
  className = '',
  label = 'Image Placeholder',
  src,
  alt = '',
  compact = false,
  loading = 'lazy',
}: Props) {
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    setFailed(false)
  }, [src])

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ aspectRatio }}>
      {src && !failed ? (
        <img src={src} alt={alt} loading={loading} onError={() => setFailed(true)} className="h-full w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={label}
          className="flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-gold/50 bg-gradient-to-br from-sand to-butter/70 text-muted"
        >
          <ImageIcon className={compact ? 'h-5 w-5' : 'h-8 w-8'} aria-hidden="true" />
          {!compact && <span className="text-xs font-medium">{label}</span>}
        </div>
      )}
    </div>
  )
}
