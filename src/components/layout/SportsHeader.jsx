import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import sportsHeader from '../../data/sportsHeader'

function SportsHeader() {
  return (
    <section>
        <Container className="px-2 md:px-0">
        <h1 className='clip-path-mypolygon font-pop  my-4 md:my-8 font-medium text-base md:text-[22px] w-[120px] md:w-[150px] px-4 py-2 text-primary bg-yellow-400'>Sports</h1>
                <Flex className="md:gap-x-10 gap-y-4 flex-wrap md:justify-start justify-center">
                    <div>
                       
                        <div className='md:w-[420px] w-[350px]'>
                            {
                             sportsHeader.map((item, index) => (
                                    index == 0 &&
                                    <div key={index} className='w-full'>
                                        <Image src={item.url} className="w-full" />
                                        <div>
                                            <h1 className='font-roboto font-medium text-xl text-[#111111] mb-2'>{item.title}</h1>
                                            <h2 className='font-roboto font-normal text-sm md:text-base text-[#111111]'>{item.subtitle}</h2>
                                            <h2 className='font-roboto font-medium text-base text-red-500'>{item.head}</h2>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div>
                        <div className='flex md:w-[500px] gap-4 justify-center md:gap-5 flex-wrap'>
                            {
                                sportsHeader.map((item, index) => (
                                    index > 0 &&
                                    <div key={index} className='md:w-[224px] w-[150px]'>
                                        <Image src={item.url} className="w-full" />
                                        <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
                                        <h2 className='font-roboto font-medium text-base text-red-500'>{item.head}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </Flex>
          
        </Container>
    </section>
  )
}

export default SportsHeader