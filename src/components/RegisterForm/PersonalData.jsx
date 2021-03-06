import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

function PersonalData({ handleSubmit, validations }) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [cpf, setCPF] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);

  const [errors, setErrors] = useState({
    cpf: {
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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit({ name, lastname, cpf, promotions, news });
      }}
    >
      <TextField
        id="name" label="Nome" variant="outlined" fullWidth required margin="normal"
        onChange={(event) => setName(event.target.value)} value={name}
      />
      <TextField
        id="lastname" label="Sobrenome" variant="outlined" fullWidth required margin="normal"
        onChange={(event) => setLastname(event.target.value)} value={lastname}
      />
      <TextField
        id="cpf" name="cpf" label="CPF" variant="outlined" fullWidth required margin="normal"
        onChange={(event) => setCPF(event.target.value)} value={cpf}
        error={errors.cpf.error}
        helperText={errors.cpf.message}
        onBlur={handleValidateFields}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={promotions}
            onClick={(event) => setPromotions(event.target.checked)}
            name="promotions"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={news}
            onClick={(event) => setNews(event.target.checked)}
            name="news"
            color="primary"
          />
        }
        label="Novidades"
      />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default PersonalData;