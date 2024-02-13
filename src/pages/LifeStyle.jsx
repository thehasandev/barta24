import React, { useEffect } from 'react'
import LifeStyleHeader from '../components/layout/LifeStyleHeader'
import LifeStyleNews from '../components/layout/LifeStyleNews'

function LifeStyle() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
     <LifeStyleHeader/>
     <LifeStyleNews/>
    </>
  )
}

export default LifeStyle