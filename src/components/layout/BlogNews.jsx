import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Blognews from '../../data/blogNews'

function BlogNews() {
  return (
    <section className='my-12'>
    <Container>
       <Flex className="md:justify-between gap-5 md:gap-0 flex-wrap justify-center">
        {
          Blognews.map((item,index)=>(
            <div key={index} className='w-[300px]'>
                <h1 className='font-roboto md:mb-4 mb-2 font-normal text-2xl md:text-[36px] text-[#111111]'>{item.title}</h1>
                <Image src={item.url} className="w-full"/>
                <h2 className='font-roboto my-2 font-medium text-xl text-[#111111]'>{item.subtitle}</h2>
                <p className='font-pop mb-3  font-normal text-sm text-[#111111]'>{item.description}</p>
                <p className='font-pop  font-medium text-base text-secondary'>{item.subHead}</p>
            </div>
          ))
        }
       </Flex>
    </Container>
    </section>
  )
}

export default BlogNews