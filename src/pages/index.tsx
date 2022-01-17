import React from 'react'
import Layout from '../components/templates/general'
import PresentationCard from '../components/molecules/PresentationCard'

export default function IndexPage() {
  const pageTitle = 'Home'

  return (
    <Layout pageTitle={pageTitle}>
      <PresentationCard />
    </Layout>
  )
}
