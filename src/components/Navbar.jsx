import React from 'react'
import Container from './Container'
import Flex from './Flex'

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import LogoSvg from './LogoSvg';

function Navbar() {
  return (
    <nav>
      <section className='bg-black/10'>
        <Container>
          <Flex className="justify-between items-center">
            <Flex className="gap-x-4">
              <FaFacebookF className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaTwitter className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaYoutube className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaLinkedin className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaInstagram className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaPlay className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaApple className='hover:text-red-500 duration-300 cursor-pointer' />
              <FaWifi className='hover:text-red-500 duration-300 cursor-pointer' />
            </Flex>
            <div>
              <button className='font-roboto text-sm text-white bg-black px-4 py-2'>English</button>
            </div>
          </Flex>
        </Container>
      </section>
      <section className='flex justify-center'>
        <LogoSvg/>
      </section>


    </nav>
  )
}

export default Navbar