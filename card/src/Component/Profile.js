import React from 'react'
import "./Profile.css"
import image from "./photot2.jpg"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Profile = () => {
    return (
        <div className='container'>
        <img style={{width:"300px"}}src={image} className="image"/>
        <h2>Taher Boutouria</h2>
        <h3>GomycodeStudent js </h3>
        <div className='SocialMediaIcon'>
            <FacebookRoundedIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <LinkedInIcon className='icon'/>
        </div>
        </div>
    )
}
export default Profile