import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import internationalNews from '../../data/internationalNews'

function InternationalNews() {
    return (
        <section className='mb-8'>
            <Container className="px-2 md:px-0">
                <h1 className='font-pop mb-4 mt-6 md:my-6 font-normal text-3xl text-[#111111]'>International এর আরও খবর</h1>
                <Flex className="md:gap-x-10 flex-wrap md:justify-start justify-center">
                    <div>
                        <div className='flex md:w-[1000px] gap-4 justify-center md:justify-start md:gap-5 flex-wrap'>
                            {
                                internationalNews.map((item, index) => (
                                    <Flex key={index} className='md:w-[480px] items-center w-[350px] gap-6'>
                                        <div className='w-[170px]'>
                                            <Image src={item.url} className="w-full" />
                                        </div>
                                        <div className='w-[280px]'>
                                            <h2 className='font-roboto mt-2 font-normal text-base md:text-xl text-[#111111]'>{item.title}</h2>
                                            <h2 className='font-roboto font-medium text-base text-red-500'>{item.head}</h2>
                                        </div>
                                    </Flex>
                                ))
                            }
                        </div>
                    </div>

                </Flex>

            </Container>
        </section>
    )
}

export default InternationalNews