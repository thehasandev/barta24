import React from 'react'

import Container from '../components/Container'
import LogoSvg from '../components/LogoSvg'
function Error() {
    return (
        <section>
            <Container>
                <div className='w-32 m-5'>
                    <LogoSvg />
                </div>
                <h1 className='text-7xl text-[#111111] font-black font-roboto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Error 404 ...</h1>
            </Container>
        </section>
    )
}

export default Error