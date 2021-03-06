import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import registerValidations from '../../contexts/RegisterValidations';
import useErrors from '../../hooks/useErrors';

const UserData = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validations = useContext(registerValidations);
  const [errors, handleValidateFields, handleValidateForm] = useErrors(validations);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (handleValidateForm()) handleSubmit({ email, password });
    }
    }>
      <TextField id="email" label="E-mail" type="email" variant="outlined" fullWidth required margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <TextField
        id="password"
        name="password" label="Senha"
        type="password" variant="outlined"
        fullWidth required margin="normal"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={errors.password.error}
        helperText={errors.password.message}
        onBlur={handleValidateFields}
      />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>);
}

export default UserData;