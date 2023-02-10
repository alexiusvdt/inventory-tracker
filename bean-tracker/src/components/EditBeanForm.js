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
      {price: parseInt(event.target.issue.value)},
      {roast: event.target.roast.value},
      {stock: event.target.roast.value},
      {id: event.target.id.value}
      // may need to go away from reusable form here or add option to only show +/- on this form
      );
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update Bean" />
    </React.Fragment>
  );
}

EditBeanForm.propTypes = {
  ticket: PropTypes.object,
  onEditBean: PropTypes.func
};

export default EditBeanForm;