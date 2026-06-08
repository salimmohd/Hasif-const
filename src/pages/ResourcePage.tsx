import { Navigate, useLocation } from 'react-router-dom'
import PageIntro from '../components/ui/PageIntro'
import { resourcePages } from '../data/siteData'

function ResourcePage() {
  const { pathname } = useLocation()
  const page = resourcePages[pathname]

  if (!page) {
    return <Navigate replace to="/" />
  }

  return <PageIntro copy={page.copy} eyebrow={page.eyebrow} title={page.title} />
}

export default ResourcePage
