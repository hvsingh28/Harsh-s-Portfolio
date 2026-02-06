import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
const DisplayProjects = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {projects.map((project)=>(
                <ProjectCard key={project.id} image={project.image} techStack={project.techStack} name={project.name} description={project.description}  github={project.github}/>
            ))}
    </div>
  )
}

export default DisplayProjects