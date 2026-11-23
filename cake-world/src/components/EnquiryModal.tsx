import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { X } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import { btnPrimary } from './ui'
import { siteConfig } from '../config/siteConfig'
import { formatPrice } from '../utils/format'
import { buildEnquiryMessage, buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp'
import type { EnquiryItem } from '../types'

interface Props {
  item: EnquiryItem
  onClose: () => void
}

export default function EnquiryModal({ item, onClose }: Props) {
  // The location lives only in this component's state. It is never persisted.
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [])

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
      return
    }
    if (e.key !== 'Tab') return
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, input, a[href]')
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const cleaned = location.trim()
    if (!cleaned) {
      setError('Please enter your delivery location to continue.')
      inputRef.current?.focus()
      return
    }
    const url = buildWhatsAppUrl(buildEnquiryMessage(item.name, item.price, cleaned))
    if (openWhatsApp(url)) {
      onClose()
    } else {
      setError(`We couldn’t open WhatsApp. Please message us directly on ${siteConfig.displayPhone}.`)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
      onKeyDown={onKeyDown}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-cream p-6 shadow-soft"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="enquiry-title" className="text-2xl font-semibold">Enquire on WhatsApp</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 hover:bg-butter"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex items-center gap-4 rounded-2xl bg-sand p-3">
          <ImagePlaceholder aspectRatio="1 / 1" className="!w-20 shrink-0" src={item.imagePath} alt={item.name} compact label="Image Placeholder" />
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold leading-snug">{item.name}</p>
            <p className="mt-0.5 text-muted">{formatPrice(item.price)}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-5">
          <label htmlFor="delivery-location" className="text-sm font-medium">Delivery location</label>
          <input
            ref={inputRef}
            id="delivery-location"
            type="text"
            value={location}
            maxLength={200}
            autoComplete="street-address"
            placeholder="Area, city or full address"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'location-error' : undefined}
            onChange={(e) => {
              setLocation(e.target.value)
              if (error) setError('')
            }}
            className={`mt-1.5 w-full rounded-2xl border bg-white px-4 py-3 text-sm ${error ? 'border-red-700' : 'border-gold/50'}`}
          />
          {error && (
            <p id="location-error" role="alert" className="mt-2 text-sm text-red-700">
              {error}
            </p>
          )}
          <button type="submit" className={`${btnPrimary} mt-5 w-full py-3`}>Continue to WhatsApp</button>
          <p className="mt-3 text-center text-xs text-muted">WhatsApp opens with your message ready. You press Send.</p>
        </form>
      </div>
    </div>
  )
}
