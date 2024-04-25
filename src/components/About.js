import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.user.bio}</p> */}
      {props.user.bio ? <p>{props.user.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}

      <Links github={props.user.links.github} linkedin={props.user.links.linkedin}/>


    </div>
  );
}

export default About;
