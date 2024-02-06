import React from 'react'
import NewCetegoris from '../components/layout/NewCetegoris'
import NewsHeader from '../components/layout/NewsHeader'
import NationalPoliticalNews from '../components/layout/NationalPoliticalNews'
import Sports from '../components/layout/Sports'
import TeachNews from '../components/layout/TeachNews'
import BlogNews from '../components/layout/BlogNews'



function Home() {

  return (
    <>
      <NewCetegoris />
      <NewsHeader />
      <NationalPoliticalNews />
      <Sports/>
      <BlogNews/>
      <TeachNews/>
      
    </>
  )
}

export default Home