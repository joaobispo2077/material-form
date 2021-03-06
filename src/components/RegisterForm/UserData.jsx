import React from 'react';
import { Button, TextField } from '@material-ui/core';

const UserData = ({ handleSubmit }) => {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }
    }>
      <TextField id="email" label="E-mail" type="email" variant="outlined" fullWidth required margin="normal" />
      <TextField id="password" label="Senha" type="password" variant="outlined" fullWidth required margin="normal" />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>);
}

export default UserData;