
import React from 'react'
import{VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkIcon from '@mui/icons-material/Work';
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

</VerticalTimelineElement><VerticalTimelineElement
date= "2020-2021 " 
iconStyle={{background:"#3e497a",colo:"#fff"}}
icon={< WorkIcon/>}>
<h3>M7 IT Solutions Pvt Ltd</h3>
<p>Web designer</p>
</VerticalTimelineElement>
<VerticalTimelineElement
date= "2022-present " 
iconStyle={{background:"#3e497a",colo:"#fff"}}
icon={<WorkIcon/>}>
<h3>Ping Us IT solution</h3>
<p>BlockChain Developer,Chennai
</p>
</VerticalTimelineElement>

      </VerticalTimeline>
    
    </div>
  )
}

export default Experience