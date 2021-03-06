import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const DeliveryData = ({ handleSubmit }) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [federation, setFederation] = useState("");
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit({ cep, address, number, federation, city });
    }}>
      <TextField id="cep" label="CEP" type="number" variant="outlined" required margin="normal"
        value={cep} onChange={(event) => setCep(event.target.value)}
      />
      <TextField id="address" label="Endereço" type="text" variant="outlined" fullWidth required margin="normal"
        value={address} onChange={(event) => setAddress(event.target.value)}
      />
      <TextField id="number" label="Número" type="number" variant="outlined" required margin="normal"
        value={number} onChange={(event) => setNumber(event.target.value)}
      />
      <TextField id="federation" label="Estado" type="text" variant="outlined" required margin="normal"
        value={federation} onChange={(event) => setFederation(event.target.value)}
      />
      <TextField id="city" label="Cidade" type="text" variant="outlined" required margin="normal"
        value={city} onChange={(event) => setCity(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}

export default DeliveryData;