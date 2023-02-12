import React from "react";

const gradientStyle = {
  backgroundColor: "#c0c0c0",
}

function Header(){
  return (
    <React.Fragment>
    <div style={gradientStyle}>
      <h1>BeanBoys & Bros</h1>
      <h3>The freshest burlap bean bags in Boston!</h3>
      <p>So good, you'll never drink Dunkies ever again!</p>
    </div>
    </React.Fragment>
  );
}

export default Header