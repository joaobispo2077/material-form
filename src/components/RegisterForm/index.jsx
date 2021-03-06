import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegisterForm({ handleSubmit }) {
  const [stage, setStage] = useState(0);

  const handleNextFormStage = () => {
    setStage(stage + 1);
  }

  const stages = [
    <UserData handleSubmit={handleNextFormStage} />,
    <PersonalData handleSubmit={handleNextFormStage} />,
    <DeliveryData handleSubmit={handleSubmit} />
  ];

  return (
    <>{stages[stage]}</>
  )
}

export default RegisterForm;