import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TextInput from './shared/TextInput';
import { Button } from '../styled_components/button';

// =====================================
// STYLED COMPONENTS
// =====================================

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  background-color: #f9f9f9;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  min-width: 300px;
  padding: 3em 0;
  width: 40%;
`;

const Error = styled.p`
  color: red;
  font-size: 0.6em;
`;

// =====================================

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      axios.post('/api/register', {
        email: this.state.email,
        password: this.state.password,
      }).then(res => {
        console.warn(res.data)
      }).catch(err => {
        console.warn('An error occured', err)
      })
    } else {
      this.setState({ error: 'Passwords do not match'})
    }

  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormBody>
            <TextInput
              type="text"
              name="email"
              label="Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <TextInput
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
            {this.state.error && <Error>{this.state.error}</Error>}
            <Button onClick={this.onSubmit}>Sign Up</Button>
          </FormBody>
          <input type="submit" style={{display: 'none'}}/>
        </Form>
      </Container>
    );
  }
}

export default SignUpForm;
