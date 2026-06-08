import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { resourcePages } from './data/siteData'
import useRevealOnScroll from './hooks/useRevealOnScroll'
import useScrollToTop from './hooks/useScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import GetQuote from './pages/GetQuote'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import ResourcePage from './pages/ResourcePage'
import Services from './pages/Services'
import './App.css'

function App() {
  useScrollToTop()
  useRevealOnScroll()

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed antialiased">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Services />} path="/services" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<GetQuote />} path="/get-a-quote" />
        {Object.keys(resourcePages).map((path) => (
          <Route element={<ResourcePage />} key={path} path={path} />
        ))}
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
