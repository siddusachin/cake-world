import { siteConfig } from '../config/siteConfig'
import { formatPrice } from './format'

export const GENERIC_MESSAGE =
  "Hello Cake World! I'm interested in your cakes. Please share more details about your available options."

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

export function buildEnquiryMessage(name: string, price: number, location: string): string {
  return [
    'Hello Cake World!',
    "I'm interested in ordering the following cake.",
    `Cake Name: ${name}`,
    `Price: ${formatPrice(price)}`,
    `Delivery Location: ${location}`,
    'Please share more details about availability and delivery.',
    'Thank you!',
  ].join('\n\n')
}

/** Opens WhatsApp with a prefilled message. Never sends anything automatically. */
export function openWhatsApp(url: string): boolean {
  try {
    const win = window.open(url, '_blank')
    if (win) {
      win.opener = null
    } else {
      window.location.assign(url) // popup blocked: fall back to same tab
    }
    return true
  } catch {
    return false
  }
}
