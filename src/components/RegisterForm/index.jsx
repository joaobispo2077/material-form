import React from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegisterForm({ handleSubmit }) {
  return (
    <>
      <PersonalData handleSubmit={handleSubmit} />
      <UserData />
    </>
  )
}

export default RegisterForm;