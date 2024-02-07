import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import Naitonalnews from '../../data/naitonalnews'
import PolyticNews from '../../data/polyticsNews'

function NationalPoliticalNews() {
    return (
        <section>

            <Container>
                <Flex className="md:justify-between justify-center flex-wrap px-1 bg-white">
                    <div>
                        <h1 className='font-pop font-normal text-2xl text-[#111111] md:my-0 my-6 '>National</h1>
                       <div>

                        <div className='md:w-[420px] w-[350px]'>
                            {
                                Naitonalnews.map((item, index) => (
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
                    </div>


                    <div>
                        <div className='flex justify-center md:mt-8 md:w-[500px] gap-2 lg:gap-5 flex-wrap'>

                            {
                                Naitonalnews.map((item, index) => (
                                    index > 0 &&
                                    <div key={index} className='md:w-[224px] w-[150px]'>
                                        <Image src={item.url} className="w-full" />
                                        <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>



                    <div>
                        <h1 className='font-pop font-normal my-4 md:my-0 text-2xl text-[#111111]'>Politics</h1>
                        <div className='flex flex-wrap w-[350px] md:w-[410px] md:gap-y-4 justify-between'>
                            {
                                PolyticNews.map((item, index) => (
                                    index == 0 &&
                                    <div key={index} className='w-full'>
                                        <Image src={item.url} className="w-full" />
                                        <div className='p-5'>
                                            <h1 className='font-roboto font-medium text-xl text-[#111111]'>{item.title}</h1>
                                            <h2 className='font-roboto font-normal text-base text-[#111111] my-2'>{item.subtitle}</h2>
                                            <h2 className='font-roboto font-semibold text-base text-secondary'>{item.header}</h2>
                                        </div>
                                    </div>
                                ))
                            }

                            {
                                PolyticNews.map((item, index) => (
                                    index > 0 &&
                                    <div key={index} className='md:w-[190px] w-[160px]'>
                                        <Image src={item.url} className="w-full" />
                                        <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
                                        <h3 className='font-roboto font-semibold text-base text-secondary'>{item.header}</h3>
                                    </div>
                                ))
                            }


                        </div>
                    </div>



                    <div></div>
                </Flex>
            </Container>
        </section>
    )
}

export default NationalPoliticalNews