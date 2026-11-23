import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import { btnPrimary, iconBtn } from './ui'
import { heroSlides } from '../data/heroSlides'
import { usePrefersReducedMotion } from '../hooks'

const INTERVAL_MS = 6000

export default function HeroCarousel() {
  const count = heroSlides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (paused || reduced || count < 2) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [index, paused, reduced, count])

  if (count === 0) return null
  const go = (i: number) => setIndex((i + count) % count)

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Promotions"
      className="bg-sand"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              className="w-full shrink-0"
            >
              <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-16 lg:px-8">
                <div>
                  <p className="inline-block rounded-full bg-butter px-4 py-1.5 text-sm font-medium">{slide.offerText}</p>
                  <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{slide.heading}</h2>
                  <p className="mt-4 max-w-md text-muted">{slide.description}</p>
                  <Link to={slide.ctaLink ?? '/cakes'} tabIndex={i === index ? 0 : -1} className={`${btnPrimary} mt-6`}>
                    {slide.ctaText}
                  </Link>
                </div>
                <ImagePlaceholder aspectRatio="4 / 3" src={slide.imagePath} alt={slide.heading} label="Hero Image Placeholder" loading="eager" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6">
        <button type="button" className={iconBtn} onClick={() => go(index - 1)} aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all motion-reduce:transition-none ${i === index ? 'w-8 bg-gold' : 'w-2.5 bg-gold/40'}`}
            />
          ))}
        </div>
        <button type="button" className={iconBtn} onClick={() => go(index + 1)} aria-label="Next slide">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
