import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import HeadNews from '../../data/headNews'
import gift from "../../assets/13144439866766168438.gif"

function NewsHeader() {
  return (
    <section className='my-12'>
      <Container>
        <div className='border-r m-2 md:m-0 border-l border-b border-[#282828]'>
          <h1 className='bg-primary py-2 px-5 font-roboto font-bold text-2xl text-white'>বাংলা</h1>
          <div className='md:p-5 p-4'>
            <Flex className="justify-between flex-wrap gap-y-2">
              {
                HeadNews.map((item, index) => (
                  <div key={index} className='w-[150px] md:w-[200px]'>
                    <Image src={item.url} className="w-full" />
                    <h1 className='font-roboto font-semibold text-lg my-2 text-[#111111]'>{item.title}</h1>
                    <p className='font-roboto font-medium text-sm md:text-[19px] text-[#111111]'>{item.subTittle}</p>
                  </div>
                ))
              }

            </Flex>
          </div>
          <Flex className="justify-center my-5">
            <Image src={gift} />
          </Flex>
        </div>
      </Container>
    </section>
  )
}

export default NewsHeader