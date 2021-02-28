import React from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

function RegisterForm() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth required margin="normal" />
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            name="promocoes"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            name="novidades"
            color="primary"
          />
        }
        label="Novidades"
      />
      <Button variant="contained" color="primary" >Cadastrar</Button>
    </form>
  )
}

export default RegisterForm;