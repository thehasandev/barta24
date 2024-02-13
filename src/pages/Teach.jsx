import React, { useEffect } from 'react'
import TeachHeader from '../components/layout/TeachHeader'
import TeachHeadNews from '../components/layout/TeachHeadNews'

function Teach() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <TeachHeader/>
      <TeachHeadNews/>
    </>
  )
}

export default Teach