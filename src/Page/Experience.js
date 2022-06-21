import { linearProgressClasses } from '@mui/material'
import React from 'react'
import{VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor='block'>
<VerticalTimelineElement 
date= "2016-2020 " 
iconStyle={{background:"#3e497a",colo:"#fff"}}
icon={<SchoolOutlinedIcon/>}>
<h3>Government College Of Engeneering,Salem</h3>
<p>Higher Studies</p>
</VerticalTimelineElement>
<VerticalTimelineElement
date= "2022-present " 
iconStyle={{background:"#3e497a",colo:"#fff"}}
icon={<SchoolOutlinedIcon/>}>
<h3>Ping Us IT solution</h3>
<p>BlockChain Developer,Chennai</p>
</VerticalTimelineElement>
      </VerticalTimeline>
    
    </div>
  )
}

export default Experience