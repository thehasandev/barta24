import React from 'react'
import NewCetegoris from '../components/layout/NewCetegoris'
import NewsHeader from '../components/layout/NewsHeader'
import NationalPoliticalNews from '../components/layout/NationalPoliticalNews'
import Sports from '../components/layout/Sports'



function Home() {

  return (
    <>
      <NewCetegoris />
      <NewsHeader />
      <NationalPoliticalNews />
      <Sports/>
      
    </>
  )
}

export default Home