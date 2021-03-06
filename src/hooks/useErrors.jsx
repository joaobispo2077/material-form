import React, { useState } from 'react';

const useErrors = (validations) => {
  const initialState = _createInitialState(validations);

  const [errors, setErrors] = useState(initialState);

  const handleValidateFields = (event) => {
    const { name, value } = event.target;
    const hasError = validations[name](value);

    if (hasError) {
      setErrors({ [name]: { error: true, message: hasError.message } })
    } else {
      setErrors({ [name]: { error: false, message: "" } })
    }
  }

  const handleValidateForm = () => {
    const errorsValidation = Object.keys(errors).filter(field => errors[field].error === true);
    const hasntErrors = (errorsValidation.length === 0);
    return hasntErrors;
  }



  return [errors, handleValidateFields, handleValidateForm];
}

const _createInitialState = (validations) => {
  const initialState = Object
    .keys(validations)
    .reduce((accState, state) => {
      return Object
        .assign(accState, { [state]: { error: false, message: "" } });
    }, {});
  return initialState;
}

export default useErrors;