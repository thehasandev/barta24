import React, { useEffect } from 'react'
import PolitisHeader from '../components/layout/PolitisHeader'
import PolitiaclNewsHead from '../components/layout/PolitiaclNewsHead'

function Politis() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <PolitisHeader/>
      <PolitiaclNewsHead/>
    </>
  )
}

export default Politis