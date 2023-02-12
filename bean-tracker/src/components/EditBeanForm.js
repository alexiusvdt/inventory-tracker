import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBeanForm (props) {
  const {bean} = props;

  function handleEditBeanFormSubmission(event){
    event.preventDefault();
    props.onEditBean(
      {name: event.target.name.value},
      {origin: event.target.origin.value},
      {price: parseInt(event.target.price.value)},
      {roast: event.target.roast.value},
      {stock: parseInt(event.target.stock.value)},
      {id: bean.id}
      
      // may need to go away from reusable form here or add option to only show +/- on this form
      );
  }
  return (
    <React.Fragment>
      <div>
      <h1>Current Bean Details</h1>
      <ul>
      <h3>{bean.name}</h3>
        <li>Origin | {bean.origin}</li> 
        <li>Roast | {bean.roast}</li>
        <li>Price per lb | {bean.price}</li>
        <li>Stock | {bean.stock}</li>
      </ul>
      </div>  
      <ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update Bean" />
    </React.Fragment>
  );
}

EditBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditBean: PropTypes.func
};   


export default EditBeanForm;