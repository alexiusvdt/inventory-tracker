import React from "react";
import PropTypes from "prop-types"

function BeanDetail(props){
  const { bean, onClickingDelete, onClickingEdit } = props; 
  
  return (
    <React.Fragment>
      <h1>Bean Detail</h1>
      <ul>
      <h3>{bean.name}</h3>
        <li>Origin | {bean.origin}</li> 
        <li>Roast | {bean.roast}</li>
        <li>Price per lb | {bean.price}</li>
        <li>Stock | {bean.stock}</li>
      </ul>   

      <button onClick={ onClickingEdit }>Edit this bean</button>
      <button onClick={()=> onClickingDelete(bean.id) }>Delete this bean</button>
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