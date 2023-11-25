import React from 'react'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";


const Card = (props) => {

    return (
        <div className='digital-card-container'>
            <img src={`./${props.img}`} />
            <div className='digital-card-img'></div>
            <div className='digital-card-content'>
                <div className='bio-info'>
                    <h2>{props.name}</h2>
                    <p className='dc-position'>{props.position}</p>
                    <p className='dc-website'>{props.website}</p>
                    <div className='btn-container'>
                        <button className='dc-btn dc-btn-light'><IoIosMail size={18} style={{ marginRight: '8px' }}/> Email</button>
                        <button className='dc-btn dc-btn-blue'> <FaLinkedin size={16} style={{ marginRight: '8px' }}/> LinkedIn</button>
                    </div>
                </div>
                <div className='about-info'>
                    <h4>About</h4>
                    <p>{props.about}</p>
                    <h4>Interests</h4>
                    <p>{props.interests}</p>
                </div>
            </div>
            <div className='digital-card-footer'>
            <IconContext.Provider value={{ color: "grey", className: "", size: "20px" }}>
                <a href={props.socials.github} target='_blank'><FaSquareGithub /></a>
                <a href={props.socials.linkedin} target='_blank'><FaLinkedin /></a>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default Card