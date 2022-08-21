import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fitnessImg from '../public/assets/projects/fitness.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import cloudImg from '../public/assets/projects/cloud.png'
import ProjectItem from './ProjectItem';
import todoImg from '../public/assets/projects/todo.jpg'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Fitness  App'
            backgroundImg={fitnessImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='Next JS'

          />
          <ProjectItem
            title='Cloud Management'
            backgroundImg={cloudImg}
            projectUrl='/twitch'
            tech='React JS'

          />
          <ProjectItem
            title='Todo  App'
            backgroundImg={todoImg}
            projectUrl='/todo'
            tech='Javascript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
