import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import NewsCategotis from '../../data/newsCetegoris'

function NewCetegoris() {
    const [latestNews, setLatestNews] = useState(true)
    const [populerNews, setPopulerNews] = useState(false)

    const hanldePopuler = () => {
        setPopulerNews(true)
        setLatestNews(false)
    }

    const hanldeLatest = () => {
        setLatestNews(true)
        setPopulerNews(false)
    }
    return (
        <section className='mb-5'>
            <Container>
                <Flex className="justify-between flex-wrap px-2 md:px-0">
                    <div className='lg:w-[78%] bg-gray-400/10 py-4'>
                        <Flex className="flex-wrap justify-center gap-4">
                            {
                                NewsCategotis.map((item, index) => (
                                    index == 0 &&
                                    <div key={index}>
                                        <div className='bg-primary lg:w-[750px]'>
                                            <Flex className="justify-center lg:justify-between flex-wrap">
                                                <div className='lg:w-[40%]'>
                                                    <div className='p-4'>
                                                        <h1 className='font-roboto font-semibold text-2xl text-secondary'>{item.title}</h1>
                                                        <h2 className='font-roboto my-2 font-semibold text-3xl w-[275px] text-white'>{item.subtitle}</h2>
                                                        <p className='font-pop font-normal text-sm text-white'>{item.discription}</p>
                                                    </div>
                                                </div>
                                                <div className='lg:w-[60%]'>
                                                    <Image src={item.url} className="w-full" />
                                                </div>
                                            </Flex>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                NewsCategotis.map((item, index) => (
                                    index > 0 &&
                                    <div key={index}>
                                        <div className='w-[160px] lg:w-[250px] bg-white'>
                                            <Image src={item.url} className="w-full" />
                                            <div className='p-2'>
                                                <h2 className='font-roboto mb-2 font-semibold text-lg text-[#111111]'>{item.title}</h2>
                                                <p className='font-pop font-normal text-sm md:text-lg text-[#111111]'>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Flex>
                    </div>
                    <div className='md:w-[20%] bg-gray-400/10  h-[695px] py-4'>
                        <Flex className="justify-between">
                            <div onClick={hanldeLatest} className='w-[40%] bg-primary text-white font-roboto text-xl text-center py-2 cursor-pointer'>Latest</div>
                            <div onClick={hanldePopuler} className='w-[40%] bg-primary text-white font-roboto text-xl text-center py-2 cursor-pointer'>Populer</div>
                        </Flex>
                        {
                            latestNews &&
                            <div className='mt-8 h-[600px] overflow-y-scroll'>
                                <div className='px-4 pb-4 border-b border-b-black/50 '>
                                    <h3 className='font-pop font-normal md:text-xl text-base '>Death toll rises to 99 in Chile wildfires</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>International</p>
                                </div>
                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal md:text-xl text-base '>1 killed, 29 injured when a truck overturned on way back from Ijtema</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>Committed to supporting Bangladesh's economic goals, Biden writes PM Hasina</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>1st Ever Development Communication Conclave Illuminates the Future of Communications in Bangladesh</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>DNCC orders officials to avoid plastic bottled water</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>Bangladesh beat India to reach SAFF Championship final</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>Canada extends residence ban for foreigners</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>A slice of pitha village in a brick- stone city</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-base md:text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                            </div>
                        }
                        {
                            populerNews &&
                            <div className='mt-8 h-[600px] overflow-y-scroll'>

                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>1 killed, 29 injured when a truck overturned on way back from Ijtema</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='px-4 pb-4 border-b border-b-black/50 '>
                                    <h3 className='font-pop font-normal text-xl '>Death toll rises to 99 in Chile wildfires</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>International</p>
                                </div>


                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>DNCC orders officials to avoid plastic bottled water</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>Committed to supporting Bangladesh's economic goals, Biden writes PM Hasina</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>1st Ever Development Communication Conclave Illuminates the Future of Communications in Bangladesh</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>A slice of pitha village in a brick- stone city</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>Bangladesh beat India to reach SAFF Championship final</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>


                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>Canada extends residence ban for foreigners</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>




                                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                                    <h3 className='font-pop font-normal text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
                                    <p className='font-roboto font-medium text-base text-secondary'>National</p>
                                </div>

                            </div>
                        }


                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default NewCetegoris