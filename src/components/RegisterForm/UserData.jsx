import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const UserData = ({ handleSubmit, validations }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    password: {
      error: false,
      message: ""
    }
  });

  const handleValidateFields = (event) => {
    const { name, value } = event.target;
    const hasError = validations[name](value);

    if (hasError) {
      setErrors({ [name]: { error: true, message: hasError.message } })
    } else {
      setErrors({ [name]: { error: false, message: "" } })
    }

  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit({ email, password });
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
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>);
}

export default UserData;