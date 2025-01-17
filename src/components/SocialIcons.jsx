import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Button from './Button'

const icons = [
  {
    href:"https://www.linkedin.com/in/recalde-fabrizio-dario-47a755216/",
    components: <FaLinkedin/>,
  },
  {
    href:"https://github.com/RecaldeFabrizio",
    components: <FaGithub/>,
  },
  {
    href:"https://www.instagram.com/fadare9898/?next=%2F",
    components: <FaInstagram/>,
  },
]

const SocialIcons = () => {
  return (
    <div className=' flex justify-center md:justify-start space-x-4'>
      {icons.map((icons, index)=>(
        <a href={icons.href} target='_blank' className=" w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full text-white hover:bg-blue-500 hover:text-black transition hover:shadow-[0_0_15px_theme('colors.blue.500')]">{icons.components}</a>
      ))}
      <Button text="Download CV" href="https://drive.google.com/drive/folders/18iWFxtOMQtKOVXWw1asdEriNdnJW2r1d?usp=sharing"/>
    </div>
  )
}

export default SocialIcons