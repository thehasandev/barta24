import React, { useEffect } from 'react'
import NationalHeader from '../components/layout/NationalHeader'
import NationalNews from '../components/layout/NationalNews'

function National() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
     <NationalHeader/> 
     <NationalNews/>
    </>
  )
}

export default National