import React from 'react';
import { Button, TextField } from '@material-ui/core';

const DeliveryData = () => {
  return (
    <form>
      <TextField id="cep" label="CEP" type="number" variant="outlined" required margin="normal" />
      <TextField id="address" label="Endereço" type="text" variant="outlined" fullWidth required margin="normal" />
      <TextField id="federation" label="Estado" type="text" variant="outlined" required margin="normal" />
      <TextField id="city" label="Cidade" type="text" variant="outlined" required margin="normal" />
      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}

export default DeliveryData;