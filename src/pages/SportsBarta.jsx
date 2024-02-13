import React, { useEffect } from 'react'
import SportsHeader from '../components/layout/SportsHeader'
import SportsNewsHead from '../components/layout/SportsNewsHead'

function SportsBarta() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <SportsHeader/>
    <SportsNewsHead/>
    </>
  )
}

export default SportsBarta