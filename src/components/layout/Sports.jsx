import React from 'react'
import Container from '../Container'
import sportsNews from '../../data/sportsNews'
import Flex from '../Flex'
import Image from '../Image'
import GiftImg from "../../assets/5177891174330933212.gif"

function Sports() {
    return (
        <section>
            <Container className="px-2 md:px-0">
                <Flex className="md:gap-x-10 flex-wrap justify-center">
                    <div>
                        <h1 className='font-pop mb-4 mt-6 md:mt-0 font-normal text-2xl text-[#111111]'>Sports</h1>
                        <div className='md:w-[420px] w-[350px]'>
                            {
                                sportsNews.map((item, index) => (
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
                        <div className='flex mt-12 md:w-[500px] gap-4 justify-center md:gap-5 flex-wrap'>
                            {
                                sportsNews.map((item, index) => (
                                    index > 0 &&
                                    <div key={index} className='md:w-[224px] w-[150px]'>
                                        <Image src={item.url} className="w-full" />
                                        <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </Flex>
                <Flex className="justify-center my-6">
                 <Image src={GiftImg}/>
                </Flex>
            </Container>
        </section>
    )
}

export default Sports