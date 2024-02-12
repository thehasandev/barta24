import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import LogoSvg from './LogoSvg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scroll,setScroll] = useState(false)
  const [open,setOpen] =useState(false)


  useEffect(()=>{
    const handler =()=>{
      if(window.scrollY>0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    document.addEventListener("scroll",handler)
    return()=>{
      document.removeEventListener("scroll",handler)
    }
  },[])

  

  return (
    <nav className={`${scroll && "mb-[150px]"}`}>
     <div className={`${scroll? "hidden":"block"}`}>
      <section  className='bg-black/10 px-4'>
        <Container>
          <Flex className="justify-between items-center">
            <Flex className="gap-x-4">
              <FaFacebookF className='hover:text-secondary duration-300 cursor-pointer' />
              <FaTwitter className='hover:text-secondary duration-300 cursor-pointer' />
              <FaYoutube className='hover:text-secondary duration-300 cursor-pointer' />
              <FaLinkedin className='hover:text-secondary duration-300 cursor-pointer' />
              <FaInstagram className='hover:text-secondary duration-300 cursor-pointer' />
              <FaPlay className='hover:text-secondary duration-300 cursor-pointer' />
              <FaApple className='hover:text-secondary duration-300 cursor-pointer' />
            
            </Flex>
            <div>
              <button className='font-roboto text-sm text-white bg-black px-4 py-1 md:py-2'>English</button>
            </div>
          </Flex>
        </Container>
      </section>

      <section className='flex justify-center my-2 '>
        <Container className="hidden md:block">
           <LogoSvg width="333.146px" height="113px"/>
        </Container>
      </section>
      </div> 

      <section className={`bg-primary hidden md:block ${scroll && "top-0 duration-500 py-2 fixed w-full z-10"}`}>
        <Container>
           <Flex className="justify-between items-center text-white">
             <ul className='flex gap-x-4 px-4'>
              
              <Link to="/">
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Barta</li>
              </Link>

              <Link to="/covid-19">
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>covid-19</li>
              </Link>
              
              <Link to="/national">
                <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>National</li>
              </Link>

              <Link to="/international">
                <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>International</li>
              </Link>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Politics</li>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Business</li>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Sports</li>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Entertainment</li>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Tech</li>
               <li className='font-roboto font-normal cursor-pointer text-base hover:text-secondary duration-500'>Lifestyle</li>
             </ul>

             <div>
              <button className='font-roboto text-sm text-white bg-secondary px-4 py-2.5'><FaSearch size={20}/></button>
             </div>

           </Flex>
      
        </Container>
      </section>
    
    {/* Responsive  */}
      <section className={`blcok md:hidden ${scroll && "top-0 fixed w-full z-10"}`}>
        <Container>
           <Flex className="justify-between items-center px-4 py-2 bg-white">
            
             <div>
              {
                open ? 
                <IoIosCloseCircle className=' cursor-pointer' onClick={()=>setOpen(false)} size={25}/>:
                <MdMenu  className=' cursor-pointer' onClick={()=>setOpen(true)} size={25}/>
              }
             </div>
             <div>
              <LogoSvg width="100px"/>
             </div>  
             <div>
              <button className='font-roboto text-sm text-white bg-secondary px-4 py-2.5'><FaSearch size={20}/></button>
             </div>

           </Flex>
           {
            open && 
           <ul className='bg-primary text-center '>
           
            <Link to="/">
               <li onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Barta</li>
            </Link>
            <Link to="/covid-19">
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>covid-19</li>
            </Link>

            <Link to="/national">
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>National</li>
            </Link>

            <Link to="/international">
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>International</li>
            </Link>

               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Politics</li>
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Business</li>
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Sports</li>
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Entertainment</li>
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Tech</li>
               <li  onClick={()=>setOpen(false)} className='font-roboto font-normal text-white py-2 border-b border-white/20  cursor-pointer text-base hover:text-secondary duration-500'>Lifestyle</li>
             </ul> 
           }
      
        </Container>
      </section>



    </nav>
  )
}

export default Navbar