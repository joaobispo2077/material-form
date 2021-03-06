import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function RegisterForm({ handleSubmit }) {
  const [stage, setStage] = useState(0);

  const handleNextFormStage = () => {
    if (stage < 2) setStage(stage + 1);
  }

  const handleSelectFormStage = (stage) => {
    switch (stage) {
      case 0:
        return <UserData handleSubmit={handleNextFormStage} />
      case 1:
        return <PersonalData handleSubmit={handleNextFormStage} />
      case 2:
        return <DeliveryData handleSubmit={handleSubmit} />
      default:
        return <Typography>Erro ao selecionar formulário</Typography>
    }
  }

  return (
    <>{handleSelectFormStage(stage)}</>
  )
}

export default RegisterForm;