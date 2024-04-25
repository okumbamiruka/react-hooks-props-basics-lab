import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.user.color }}>
        {/* {props.name} is a Web Developer from {props.city} */}
        {props.user.name} is a Web Developer from {props.user.city}
      </h1>
    </div>
  );
}

export default Home;
