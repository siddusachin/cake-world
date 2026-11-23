import type { Category } from '../types'

// SAMPLE CONTENT: update prices to match your real catalogue.
// imagePath example: '/images/categories/birthday.webp' (file goes in public/images/categories/)
export const categories: Category[] = [
  { id: 'birthday', name: 'Birthday Cakes', slug: 'birthday', startingPrice: 749, originalStartingPrice: 849, displayOrder: 1, imagePath: '' },
  { id: 'wedding', name: 'Wedding Cakes', slug: 'wedding', startingPrice: 3499, displayOrder: 2, imagePath: '' },
  { id: 'kids', name: 'Kids Cakes', slug: 'kids', startingPrice: 699, originalStartingPrice: 799, displayOrder: 3, imagePath: '' },
  { id: 'corporate', name: 'Corporate Events / Others', slug: 'corporate', startingPrice: 699, displayOrder: 4, imagePath: '' },
]
