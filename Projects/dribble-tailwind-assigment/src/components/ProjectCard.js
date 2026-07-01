import React from 'react'
import {FaHeart, FaEye} from 'react-icons/fa'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt="pro1" className='rounded-lg w-full'  />
        <div className="flex justify-between pt-2">
            <p className="text-base font-semibold text-left">{props.name} <button className="bg-slate-300 text-white rounded-sm py-0 px-1 hover:bg-pink-500 text-xs font-semibold">{props.level}</button></p>
            <div className="flex">
                <p className='px-1 flex m-auto text-sm font-semibold'><FaHeart size={15} className="m-auto text-slate-400"/>{props.likes}</p>
                <p className='px-1 flex m-auto text-sm font-semibold'><FaEye size={15} className="m-auto text-slate-400"/>{props.views}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard