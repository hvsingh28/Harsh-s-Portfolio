import React from 'react'
import { techStack } from '../data/techStack'
import TechStackCard from './TechStackCard'
export const DisplayTechStack = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 mt-8 gap-5'>
        {techStack.map((tech)=>(
            <TechStackCard image={tech.image} name={tech.name}/>
        ))}
    </div>
  )
}
