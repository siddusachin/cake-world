import { MessageCircle } from 'lucide-react'
import { GENERIC_MESSAGE, buildWhatsAppUrl } from '../utils/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(GENERIC_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cake World on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-soft transition hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
