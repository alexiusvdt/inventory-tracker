import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewBeanForm(props){
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeanFormSubmission}
        buttonText="Add that bag o' beans!" />
    </React.Fragment>
  );
  
  function handleNewBeanFormSubmission(event){
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      roast: event.target.roast.value,
      stock: event.target.stock.value,
      sold: parseInt(0),
      id: v4()
    });
  }

}

NewBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;