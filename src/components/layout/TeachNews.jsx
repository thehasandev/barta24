import React from 'react'

import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Teachnews from '../../data/teachNews'


function TeachNews() {
  return (
    <section className='mb-8'>
    <Container>
        <Flex className="md:gap-x-10 justify-center md:justify-start flex-wrap">
            <div>
                <h1 className='font-pop mb-4 font-normal text-2xl text-[#111111]'>Tech</h1>
                <div className='md:w-[420px] w-[350px]'>
                    {
                        Teachnews.map((item, index) => (
                            index == 0 &&
                            <div key={index} className='w-full'>
                                <Image src={item.url} className="w-full" />
                                <div className='p-5'>
                                    <h1 className='font-roboto font-medium text-xl text-[#111111] mb-4'>{item.title}</h1>
                                    <h2 className='font-roboto font-normal text-base text-[#111111]'>{item.subtitle}</h2>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>

            <div>
                <div className='flex justify-center mt-12 w-[500px] gap-5 flex-wrap'>
                    {
                        Teachnews.map((item, index) => (
                            index > 0 &&
                            <div key={index} className='md:w-[224px] w-[160px]'>
                                <Image src={item.url} className="w-full" />
                                <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
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

export default TeachNews