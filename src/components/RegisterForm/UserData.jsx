import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const UserData = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit({ email, password });
    }
    }>
      <TextField id="email" label="E-mail" type="email" variant="outlined" fullWidth required margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <TextField id="password" label="Senha" type="password" variant="outlined" fullWidth required margin="normal"
        value={password}
        onChange={(event) => setPassword(event.target.value)} />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>);
}

export default UserData;