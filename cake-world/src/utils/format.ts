import { siteConfig } from '../config/siteConfig'

const formatter = new Intl.NumberFormat(siteConfig.locale, {
  style: 'currency',
  currency: siteConfig.currency,
  maximumFractionDigits: 0,
})

export const formatPrice = (amount: number): string => formatter.format(amount)
