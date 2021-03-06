import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

import validations from '../../models/register';

function RegisterForm({ handleSubmit }) {
  const [stage, setStage] = useState(0);
  const [collectData, setCollectData] = useState({});

  useEffect(() => {
    if (stage === stages.length - 1) handleSubmit(collectData);
  }, [collectData]);

  const handleCollectData = (data) => {
    setCollectData({ ...collectData, ...data });
    handleNextFormStage();
  }

  const handleNextFormStage = () => {
    setStage(stage + 1);
  }

  const stages = [
    <UserData handleSubmit={handleCollectData} validations={validations} />,
    <PersonalData handleSubmit={handleCollectData} validations={validations} />,
    <DeliveryData handleSubmit={handleCollectData} />,
    <Typography variant="h4">Obrigado pelo cadastro!</Typography>
  ];

  return (
    <>
      <Stepper activeStep={stage}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {stages[stage]}
    </>
  )
}

export default RegisterForm;