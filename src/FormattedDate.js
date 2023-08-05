import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let period = "AM"; 
  
  
  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }
  
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = props.date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return (
    <div>
     {day} {hours}:{minutes} {period}
    </div>
  );
  } 