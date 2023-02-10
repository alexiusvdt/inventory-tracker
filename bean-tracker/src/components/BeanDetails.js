import React from "react";
import PropTypes from "prop-types"

function BeanDetail(props){
  const { bean} = props; //, onClickingDelete add in once built
  
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
      {/* <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button> */}
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func
};

export default BeanDetail;