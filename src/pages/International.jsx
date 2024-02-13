import React, { useEffect } from 'react'
import InternationalHeader from '../components/layout/InternationalHeader'
import InternationalNews from '../components/layout/InternationalNews'

function International() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
     <InternationalHeader/>
     <InternationalNews/>
    </>
  )
}

export default International