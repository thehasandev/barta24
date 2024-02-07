import React from 'react'
import Container from './Container'
import Flex from './Flex'
import LogoSvg from './LogoSvg'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from './Image';
import Scanner from "../assets/scanner.jpg"
import Scanner2 from "../assets/scan2.jpg"



function Footer() {
  return (
    <>
      <footer className='py-12 bg-gray-400/20'>
        <Container>
          <Flex className="gap-x-[300px]">
            <Flex className="gap-x-16">
              <div className='w-[400px]'>
                <LogoSvg />
                <p className='font-pop font-medium text-base text-[#111111] mb-4 mt-6'>Barta24.com is a digital news outlet</p>
                <p className='font-pop font-medium text-base text-[#111111] '>Level 12, 115 Kazi Nazrul Islam Avenue, Bangla Motor</p>
                <p className='font-pop font-medium text-base text-[#111111]'>Dhaka 1000, Bangladesh</p>
              </div>

              <div>
                <h1 className='font-roboto font-semibold text-xl text-[#111111] mb-4'>NEWSROOM</h1>
                <p className='font-roboto font-normal text-base text-[#111111] '>+880 173 071 7025</p>
                <p className='font-roboto font-normal text-base text-[#111111] '>+880 193 071 5555</p>
                <p className='font-roboto font-normal text-base text-[#111111] '>+880 183 071 5558</p>
                <p className='font-roboto font-normal text-base text-[#111111] my-2'>newsdesk@barta24.com</p>
                <h1 className='font-roboto font-semibold text-xl text-[#111111] mb-2'>MARKETING & SALES</h1>
                <p className='font-roboto font-normal text-base text-[#111111] '>+880 183 071 5558</p>
                <p className='font-roboto font-normal text-base text-[#111111] '>nowsdesk@barta24.com</p>
                <Flex className="gap-x-4 mt-4">
                  <div className='bg-[#2492E4] px-2 py-2 rounded-[4px]'>
                    <FaFacebookF className='text-white duration-300 cursor-pointer' />
                  </div>
                  <div className='bg-[#00AAFF] px-2 py-2 rounded-[4px]'>
                    <FaTwitter className='text-white duration-300 cursor-pointer' />
                  </div>

                  <div className='bg-[red] px-2 py-2 rounded-[4px]'>
                    <FaYoutube className='text-white duration-300 cursor-pointer' />
                  </div>

                  <div className='bg-[#2492E4] px-2 py-2 rounded-[4px]'>
                    <FaLinkedin className='text-white duration-300 cursor-pointer' />
                  </div>

                  <div className='bg-[#405DE6] px-2 py-2 rounded-[4px]'>
                    <FaInstagram className='text-white duration-300 cursor-pointer' />
                  </div>

                </Flex>
              </div>

            </Flex>

            <div>
              <h1 className='font-pop font-medium text-base text-[#111111] mb-4'>Download Mobile Apps</h1>
              <Flex className="flex-wrap w-[340px] justify-center gap-2">
                <div>
                  <Image src={Scanner} className="w-[200px]" />
                </div>

                <div>
                  <Image src={Scanner2} className="w-[150px]" />
                </div>

                <div>
                  <Image src={Scanner2} className="w-[150px]" />
                </div>

              </Flex>
            </div>
          </Flex>
        </Container>
      </footer>

      <div className="bg-[rgb(36,37,47)] py-4">
        <Container>
          <Flex className="justify-between items-center">
            <div>
              <p className='font-pop font-normal text-sm text-white'>© barta24.com All Rights Reserved 2018-2022 </p>
            </div>
            <div>
              <ul className='flex gap-x-2 text-white'>
                <li className='font-pop font-normal text-sm text-white'>Archive</li>
                <li className='font-pop font-normal text-sm text-white'>PSI</li>
                <li className='font-pop font-normal text-sm text-white'>RSS</li>
                <li className='font-pop font-normal text-sm text-white'>Converter</li>
              </ul>
            </div>
          </Flex>

        </Container>
      </div>
    </>
  )
}

export default Footer