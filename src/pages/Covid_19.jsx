import React, { useEffect } from 'react'
import Covid19Header from '../components/layout/Covid19Header'
import Covid19News from '../components/layout/Covid19News'

function Covid_19() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
        <Covid19Header/>
        <Covid19News/>
    </>
  )
}

export default Covid_19