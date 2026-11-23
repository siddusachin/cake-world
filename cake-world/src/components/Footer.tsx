import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { GENERIC_MESSAGE, buildWhatsAppUrl } from '../utils/whatsapp'

const item = 'inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-gold/20 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold">{siteConfig.businessName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-semibold">Quick links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className={item}>Home</Link></li>
            <li><Link to="/cakes" className={item}>Cake catalogue</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`tel:+${siteConfig.whatsappNumber}`} className={item}>
                <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.displayPhone}
              </a>
            </li>
            <li>
              <a href={buildWhatsAppUrl(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" className={item}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
            </li>
            {siteConfig.email && (
              <li>
                <a href={`mailto:${siteConfig.email}`} className={item}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> {siteConfig.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 px-5 pb-20 pt-5 text-center text-xs text-muted sm:pb-5">
        © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
      </div>
    </footer>
  )
}
