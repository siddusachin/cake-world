import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { EnquiryProvider } from './context/EnquiryContext'
import Home from './pages/Home'
import CakeCatalogue from './pages/CakeCatalogue'

function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <EnquiryProvider>
      <div className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </EnquiryProvider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<CakeCatalogue />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
