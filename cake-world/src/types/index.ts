export interface Category {
  id: string
  name: string
  slug: string
  startingPrice: number
  originalStartingPrice?: number
  displayOrder: number
  imagePath: string
}

export interface Product {
  id: string
  name: string
  categoryId: string
  price: number
  originalPrice?: number
  description: string
  imagePath: string
  displayOrder: number
  isFeatured: boolean
}

export interface HeroSlide {
  id: string
  heading: string
  description: string
  offerText: string
  ctaText: string
  ctaLink?: string // defaults to /cakes
  imagePath: string
}

export interface Testimonial {
  id: string
  customerName: string
  review: string
  rating: number
  imagePath?: string
  isSample: boolean
}

export interface Combo {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  imagePath: string
  isFeatured: boolean
}

/** What the enquiry modal needs to know about the selected cake or combo. */
export interface EnquiryItem {
  name: string
  price: number
  imagePath?: string
}
