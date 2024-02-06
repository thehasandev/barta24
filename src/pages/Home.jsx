import React from 'react'
import NewCetegoris from '../components/layout/NewCetegoris'
import NewsHeader from '../components/layout/NewsHeader'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import national from '../assets/national.jpg'
import Naitonalnews from '../data/naitonalnews'
import PolyticNews from '../data/polyticsNews'






function Home() {

  return (
    <>
      <NewCetegoris />
      <NewsHeader />
      <section>
        
        <Container>
          <Flex className="justify-between flex-wrap bg-white">
            <div>
              <h1 className='font-pop font-normal text-2xl text-[#111111]'>National</h1>
              <div className='w-[420px]'>
                {
                  Naitonalnews.map((item, index) => (
                    index == 0 &&

                    <div className='w-full'>
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
              <div className='flex mt-8 w-[500px] gap-5 flex-wrap'>

                {
                  Naitonalnews.map((item,index)=>(
                    index >0 &&
                  <div className='w-[224px]'>
                    <Image src={item.url} className="w-full" />
                    <h2 className='font-roboto mt-2 font-normal text-base text-[#111111]'>{item.title}</h2>
                  </div>
                  ))
                }
              </div>
            </div>



            <div>
            <h1 className='font-pop font-normal text-2xl text-[#111111]'>Politics</h1>
              <div className='flex flex-wrap w-[410px] gap-y-4 justify-between'>
              {
                PolyticNews.map((item,index)=>(
                  index == 0 &&
                <div className='w-full'>
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
                PolyticNews.map((item,index)=>(
                  index > 0 &&
                <div className='w-[190px]'>
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

    </>
  )
}

export default Home