import React from 'react'
import Profile from "../assets/main.png"
import { TypeAnimation } from 'react-type-animation'
import SocialIcons from './SocialIcons' 

const Home = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
            <div className='md:w-1/2 flex justify-center'>
                <img src={Profile} alt="Fabrizio Recalde" className='rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300' />
            </div>
            <div className='text-white md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
                <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Hi, It`s <span className='text-blue-500'>Fabrizio Recalde</span></h1>
                <h3 className='text-2xl sm:text-3x1 font-semibold mb-4'>I`am a <span className='text-blue-500'>
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer", 1000,
                            "Electronic Technician", 1000,
                        ]}
                        speed={50}
                        style={{ fontSize: "1rem" }}
                        repeat={Infinity}
                    />
                </span></h3>
                <p className='text-sm sm:text-lg mb-6'>About Me I am a 26-year-old Full Stack Developer passionate about new technologies, electronics, and music. Currently, I am pursuing a Technical Degree in Programming, which has helped me deepen my knowledge and refine my skills in software development. I enjoy working on both the front-end and back-end of applications, always staying updated with the latest trends in technology. In my free time, I love exploring the intersection between programming, electronics, and music. Feel free to explore my portfolio and projects to see how I can bring value to your organization. I am eager to collaborate on innovative solutions that drive business success and technological growth.</p>
                <SocialIcons/>
            </div>
        </section>
    )
}

export default Home