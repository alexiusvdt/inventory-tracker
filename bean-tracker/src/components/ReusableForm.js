import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='number'
          step="0.01"
          max='1000'
          name='price'
          placeholder='Cost (per lb)' />
        <label for="roast">Choose a roast:</label>
        <select name="roast" id="roasts">
          <option value="dark">Dark</option>
          <option value="medium">Medium</option>
          <option value="light">Light</option>
        </select>
        <input 
          type="number"
          name="stock"
          value="130" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string  
};

export default ReusableForm;
