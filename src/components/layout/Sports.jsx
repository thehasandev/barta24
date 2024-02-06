import React from 'react'
import Container from '../Container'
import sportsNews from '../../data/sportsNews'
import Flex from '../Flex'
import Image from '../Image'
import GiftImg from "../../assets/5177891174330933212.gif"

function Sports() {
    return (
        <section>
            <Container>
                <Flex className="gap-x-10">
                    <div>
                        <h1 className='font-pop mb-4 font-normal text-2xl text-[#111111]'>Sports</h1>
                        <div className='w-[420px]'>
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
                        <div className='flex mt-12 w-[500px] gap-5 flex-wrap'>
                            {
                                sportsNews.map((item, index) => (
                                    index > 0 &&
                                    <div key={index} className='w-[224px]'>
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