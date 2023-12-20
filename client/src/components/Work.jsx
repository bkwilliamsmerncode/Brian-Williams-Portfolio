import React from 'react';
import "./WorkCardStyles.css";
import WorkData from "../components/WorkData"
import WorkCard from "../components/WorkCard"




function Work() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
       {WorkData.map((val, ind) => {
        return(
          <WorkCard 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          source={val.source}
          /> 
        )
       })}
      </div>
    </div>
  )
}

export default Work
