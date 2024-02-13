import React, { useEffect } from 'react'
import EnternentmentHeader from '../components/layout/EnternentmentHeader'
import EntertentmentNews from '../components/layout/EntertentmentNews'

function Entertentment() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <EnternentmentHeader/>
      <EntertentmentNews/>
    </>
  )
}

export default Entertentment