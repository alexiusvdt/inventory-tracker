import React from "react";
import PropTypes from "prop-types"

function BeanDetail(props){
  const { bean, onClickingDelete } = props; 
  
  return (
    <React.Fragment>
      <h1>Bean Detail</h1>
      <ul>
        <li>{bean.name}</li> 
        <li>{bean.origin}</li>
        <li>{bean.roast}</li>
        <li>{bean.price}</li>
        <li>{bean.stock}</li>
      </ul>   
      <button onClick={() => onClickingDelete(bean.id)}>Delete this Bean</button>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeanDetail;