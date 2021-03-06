import React, { createContext } from 'react';
import validations from '../models/register';
const RegisterValidations = createContext(validations);

export default RegisterValidations;