import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import newsOne from "../assets/resize.jpg"
import newtwo from "../assets/news2.jpg"
import NewsCategotis from '../data/newsCetegoris'



function Home() {
  return (
    <section className='mt-6'>
      <Container>
        <Flex className="justify-between ">
          <div className='w-[80%] bg-black/20 py-4'>
            <Flex className="flex-wrap justify-center gap-4">
              {
                NewsCategotis.map((item,index)=>(
                  index == 0 &&
                <div>
                  <div className='bg-primary w-[800px]'>
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
  NewsCategotis.map((item,index)=>(
      index > 0 &&
              <div>
                <div className='w-[250px] bg-white'>
                 <Image src={item.url} className="w-full"/>
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
          <div className='w-[18%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam non, adipisci libero dolor excepturi sapiente cumque id inventore, omnis facere a officia, praesentium officiis asperiores rem voluptate amet? Accusantium id hic non temporibus natus quaerat, in fugit totam debitis cum animi dolores dignissimos maxime expedita eveniet, sed quos? Atque cumque repellat eum doloribus mollitia perspiciatis? Quam reiciendis obcaecati, quo, ullam odio libero cumque temporibus molestiae sapiente reprehenderit quibusdam debitis sequi alias quod neque, vitae praesentium earum. Obcaecati, cum maxime perspiciatis ab facilis soluta vel. Suscipit ea est, eaque, laudantium temporibus quos, perspiciatis soluta vero nesciunt mollitia numquam quo amet.</div>
        </Flex>
      </Container>
    </section>
  )
}

export default Home