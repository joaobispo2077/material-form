import React from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegisterForm({ handleSubmit }) {
  return (
    <>
      <PersonalData handleSubmit={handleSubmit} />
      <UserData />
      <DeliveryData />
    </>
  )
}

export default RegisterForm;