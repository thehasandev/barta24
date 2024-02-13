import React, { useEffect } from 'react'
import BusinessHeader from '../components/layout/BusinessHeader'
import BusinessNewsHead from '../components/layout/BusinessNewsHead'

function Business() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
     <BusinessHeader/>
     <BusinessNewsHead/>
    </>
  )
}

export default Business