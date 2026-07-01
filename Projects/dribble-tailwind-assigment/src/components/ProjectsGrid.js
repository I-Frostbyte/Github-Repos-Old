import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectCardData from './ProjectCardData';
import {MdOutlineSort} from 'react-icons/md'

const ProjectsGrid = () => {
  return (
    <div id='projects-grid-container' className='w-full pt-5 px-14'>
        <div className="flex justify-between">
            <select name="categories" id="cat-select" className='rounded-lg border-rose-300 hover:border-2 hover:border-rose-500 text-center'>
                <option value="popular">Popular</option>
                <option value="new">Noteworthy</option>
                <option value="line-break"><hr /></option>
                <option value="market">Marketplace</option>
            </select>
            <button className="bg-white text-black p-2 flex border border-slate-300 rounded-lg pr-3"><MdOutlineSort className='m-auto' /> Filters</button>
        </div>
        <div id="project-container" className='m-auto w-full grid xl:w-full xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 pb-20 pt-10 justify-around'>
            {ProjectCardData.map((val, ind) =>{
                return(
                   <ProjectCard 
                   key={ind}
                   imgsrc={val.imgsrc}
                   name={val.name}
                   level={val.level}
                   likes={val.likes}
                   views={val.views}
                  //  title={val.title}
                  //  text={val.text}
                  //  view={val.view}
                  //  source={val.source}
                   /> 
                );
            })}
        </div>
        <div id="sign-up-buttons" className="flex justify-center pt-5 pb-10">
          <button className="bg-pink-600 text-white font-semibold text-base px-12 py-2 rounded-md">Sign up to continue</button>
          <p className="text-pink-600 text-sm font-semibold px-12 mt-2"><a href="#"> or sign in </a></p>
        </div>
    </div>
  )
}

export default ProjectsGrid