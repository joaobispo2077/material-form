import React from 'react';
import { Button, TextField, Switch  } from '@material-ui/core';

function RegisterForm() {
  return(
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth required/>
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary" >Cadastrar</Button>
    </form>
  )
}

export default RegisterForm;