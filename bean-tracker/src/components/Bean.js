import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <ul>
        <h3>{props.name}</h3>
        <span>{props.origin}</span>
        <span>{props.roast}</span>
        <span>{props.price}</span>
        <span>{props.stock}</span>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string,
  // whenBeanClicked: PropTypes.func
};

export default Bean;