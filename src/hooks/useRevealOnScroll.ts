import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useRevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.section-reveal'))

    revealElements.forEach((element) => {
      element.classList.remove('is-visible')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    )

    const frame = window.requestAnimationFrame(() => {
      revealElements.forEach((element) => observer.observe(element))
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname])
}

export default useRevealOnScroll
