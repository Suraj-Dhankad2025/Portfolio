import React from "react";
import data from "../assets/data.json";
const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimeLineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
const TimeLineItem = ({ heading, text, index,url }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"
    }`}
  >
   <div  >
   <a href={url} style={{color:'white'}}>
        <h2>{heading}</h2>
        <p>{text}</p>
        </a>
   </div>
  </div>
);
export default TimeLine;