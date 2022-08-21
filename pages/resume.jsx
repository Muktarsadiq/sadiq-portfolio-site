import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
const resume = () => {
  return (
    <>
      <Head>
        <title>Sadiq | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Muktar Sadiq</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/muktar-sadiq-815046218/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Muktarsadiq'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
          <span className='flex py-5'>
          Email: muktarsadiq.m@yahoo.com | 
          <AiFillPhone size={20} /> 070 5936 1919
          </span>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <h3>Objective</h3>
        <p>
          As some one that's facinated by computers and it's technologies, 
          i want to build amazing, scalable and interactive projects and also try 
          to be apart of something bigger than just myself, while also growing in my stack
          as a web developer and possibly learn so much more from skilled developers
          from around the world. My goal to obtain challenging roles as a Front-End Developer,
          where my skills and knowledge acquired will have valuable application.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
        </div>

        <div className='text-center py-4'>
          <div className='text-center py-2 font-bold'> Hobbies </div>
          <span>Reading | Photography | Painting </span>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <p>No prior Professional work experience, but i have worked on some personal projects.</p>
        {/* Experience */}
        <br />
      </div>
    </>
  );
};

export default resume;
