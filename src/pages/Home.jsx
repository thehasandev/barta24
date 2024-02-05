import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import newsOne from "../assets/resize.jpg"
import newtwo from "../assets/news2.jpg"
import NewsCategotis from '../data/newsCetegoris'




function Home() {
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
    <section className='mt-6'>
      <Container>
        <Flex className="justify-between flex-wrap">
          <div className='w-[78%] bg-black/20 py-4'>
            <Flex className="flex-wrap justify-center gap-4">
              {
                NewsCategotis.map((item, index) => (
                  index == 0 &&
                  <div key={index}>
                    <div className='bg-primary w-[750px]'>
                      <Flex className="justify-between">
                        <div className='w-[40%]'>
                          <div className='p-4'>
                            <h1 className='font-roboto font-semibold text-2xl text-secondary'>{item.title}</h1>
                            <h2 className='font-roboto my-2 font-semibold text-3xl w-[275px] text-white'>{item.subtitle}</h2>
                            <p className='font-pop font-normal text-sm text-white'>{item.discription}</p>
                          </div>
                        </div>
                        <div className='w-[60%]'>
                          <Image src={newsOne} className="w-full" />
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
                    <div className='w-[250px] bg-white'>
                      <Image src={item.url} className="w-full" />
                      <div className='p-2'>
                        <h2 className='font-roboto mb-2 font-semibold text-lg text-[#111111]'>{item.title}</h2>
                        <p className='font-pop font-normal text-xl text-[#111111]'>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Flex>
          </div>
          <div className='w-[20%] bg-black/10 h-[695px] py-4'>
            <Flex className="justify-between">
              <div onClick={hanldeLatest} className='w-[40%] bg-primary text-white font-roboto text-xl text-center py-2'>Latest</div>
              <div onClick={hanldePopuler} className='w-[40%] bg-primary text-white font-roboto text-xl text-center py-2'>Populer</div>
            </Flex>
            {
              latestNews &&
              <div className='mt-8 h-[600px] overflow-y-scroll'>
                <div className='px-4 pb-4 border-b border-b-black/50 '>
                  <h3 className='font-pop font-normal text-xl '>Death toll rises to 99 in Chile wildfires</h3>
                  <p className='font-roboto font-medium text-base text-secondary'>International</p>
                </div>
                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                  <h3 className='font-pop font-normal text-xl '>1 killed, 29 injured when a truck overturned on way back from Ijtema</h3>
                  <p className='font-roboto font-medium text-base text-secondary'>National</p>
                </div>

                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                  <h3 className='font-pop font-normal text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
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


                <div className='px-4 pb-4 border-b border-b-black/50 pt-4'>
                  <h3 className='font-pop font-normal text-xl '>DNCC orders officials to avoid plastic bottled water</h3>
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
                  <h3 className='font-pop font-normal text-xl '>A slice of pitha village in a brick- stone city</h3>
                  <p className='font-roboto font-medium text-base text-secondary'>National</p>
                </div>

                <div className='mt-5 px-4 pb-4 border-b border-b-black/50 pt-4'>
                  <h3 className='font-pop font-normal text-xl '>Playing 'Sampan' in the kingdom of flowers</h3>
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

export default Home