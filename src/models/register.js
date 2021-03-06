const handleValidateCPF = (cpf) => {
  if (cpf.length !== 11) {
    const error = true;
    const message = "O CPF deve ter 11 dígitos."
    return { error, message };
  } else {
    return false;
  }

}


const handleValidatePassword = (password) => {
  if (password.length < 4 || password.length > 72) {
    const error = true;
    const message = "A senha deve ter entre 4 e 72 caracteres."
    return { error, message };
  } else {
    return false;
  }
}

const validations = {
  cpf: handleValidateCPF,
  password: handleValidatePassword,
}

export default validations;