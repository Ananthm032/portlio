import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className='footer'>
        <div className="socialmedia ">
        <InstagramIcon/>
        < YouTubeIcon/>
        <TwitterIcon/>
        < FacebookIcon/>
    </div>
    <p>@copy.link address</p>
    </div>
  )
}

export default Footer