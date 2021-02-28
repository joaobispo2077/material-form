import React, { Component } from 'react';
import { Container, Typography } from "@material-ui/core";

import RegisterForm from './components/RegisterForm';

class App extends Component {

  render(){
    return (
      <Container component="article" maxWidth="sm" align="center">
        <Typography variant="h3" component="h1">Formulário de cadastro</Typography>
        <RegisterForm />
      </Container>
    );
  }
}

export default App;
