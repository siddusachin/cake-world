import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import EnquiryModal from '../components/EnquiryModal'
import type { EnquiryItem } from '../types'

interface EnquiryContextValue {
  openEnquiry: (item: EnquiryItem) => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<EnquiryItem | null>(null)
  const openEnquiry = useCallback((next: EnquiryItem) => setItem(next), [])
  const close = useCallback(() => setItem(null), [])
  const value = useMemo(() => ({ openEnquiry }), [openEnquiry])

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      {item && <EnquiryModal item={item} onClose={close} />}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry(): EnquiryContextValue {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used inside EnquiryProvider')
  return ctx
}
