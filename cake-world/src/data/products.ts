import type { Product } from '../types'

// SAMPLE CONTENT: replace names, prices and descriptions with your real cakes.
// Set imagePath like '/images/products/chocolate-truffle.webp' once the file is in public/images/products/.
// Leave it '' to show the placeholder.
export const products: Product[] = [
  { id: 'bd-1', name: 'Chocolate Truffle Cake', categoryId: 'birthday', price: 899, originalPrice: 1099, description: 'Rich chocolate sponge layered with silky truffle ganache.', imagePath: '', displayOrder: 1, isFeatured: true },
  { id: 'bd-2', name: 'Red Velvet Cake', categoryId: 'birthday', price: 999, description: 'Soft red velvet layers with cream cheese frosting.', imagePath: '', displayOrder: 2, isFeatured: true },
  { id: 'bd-3', name: 'Butterscotch Cake', categoryId: 'birthday', price: 799, description: 'Vanilla sponge with butterscotch cream and crunchy praline.', imagePath: '', displayOrder: 3, isFeatured: false },
  { id: 'bd-4', name: 'Pineapple Fresh Cream Cake', categoryId: 'birthday', price: 749, originalPrice: 849, description: 'Light sponge with fresh cream and juicy pineapple pieces.', imagePath: '', displayOrder: 4, isFeatured: false },

  { id: 'wd-1', name: 'Three-Tier Floral Cake', categoryId: 'wedding', price: 4999, originalPrice: 5999, description: 'Elegant three-tier cake finished with delicate floral details.', imagePath: '', displayOrder: 1, isFeatured: true },
  { id: 'wd-2', name: 'Classic Vanilla Tiered Cake', categoryId: 'wedding', price: 3499, description: 'Two-tier vanilla cake with smooth buttercream.', imagePath: '', displayOrder: 2, isFeatured: false },
  { id: 'wd-3', name: 'Royal Fondant Cake', categoryId: 'wedding', price: 5499, description: 'Fondant-finished showpiece with gold accents.', imagePath: '', displayOrder: 3, isFeatured: false },

  { id: 'kd-1', name: 'Cartoon Theme Cake', categoryId: 'kids', price: 1299, description: 'Your child’s favourite cartoon character on a soft sponge.', imagePath: '', displayOrder: 1, isFeatured: true },
  { id: 'kd-2', name: 'Unicorn Dream Cake', categoryId: 'kids', price: 1499, originalPrice: 1699, description: 'Pastel buttercream with a handmade unicorn topper.', imagePath: '', displayOrder: 2, isFeatured: false },
  { id: 'kd-3', name: 'Choco Chip Mini Cake', categoryId: 'kids', price: 699, description: 'A small chocolate chip cake, ideal for little celebrations.', imagePath: '', displayOrder: 3, isFeatured: false },

  { id: 'co-1', name: 'Logo Cake', categoryId: 'corporate', price: 1799, description: 'Your company logo on a clean, custom-sized cake.', imagePath: '', displayOrder: 1, isFeatured: true },
  { id: 'co-2', name: 'Cupcake Box (12 pcs)', categoryId: 'corporate', price: 699, description: 'Assorted cupcakes, packed for sharing at the office.', imagePath: '', displayOrder: 2, isFeatured: false },
  { id: 'co-3', name: 'Celebration Sheet Cake', categoryId: 'corporate', price: 2499, description: 'A large sheet cake that serves a whole team.', imagePath: '', displayOrder: 3, isFeatured: false },
]
