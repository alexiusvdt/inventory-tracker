import React from "react";
import PropTypes from "prop-types"

const editStyle = {
  backgroundColor: '#808080',
  fontFamily: 'monospace',
  outlineStyle: 'outset',
  outlineColor: 'black',
  outlineWidth: 2,
  justifyContent: "space-around"
}

function BeanDetail(props){
  const { bean, onClickingDelete, onClickingEdit, onBeanSale } = props; 
  
  return (
    <React.Fragment>
      <div style={editStyle} >
      <h1>Bean Detail</h1>
      <ul>
      <h3>{bean.name}</h3>
        <li>Origin | {bean.origin}</li> 
        <li>Roast | {bean.roast}</li>
        <li>Price per lb | {bean.price}</li>
        <li>Stock Remaining | {bean.stock}</li>
        <li>Stock Sold | {bean.sold}</li>
      </ul>   
      </div>

      <button onClick={( onBeanSale )}>Sell a pound of this bean!</button>
      <button onClick={ onClickingEdit }>Edit this bean</button>
      <button onClick={()=> onClickingDelete(bean.id) }>Delete this bean</button>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onBeanSale: PropTypes.func
};

export default BeanDetail;