import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
} from './common';

type Props = {
  emailChanged: Function,
  passwordChanged: Function,
  email: String,
  password: String,
}

class LoginForm extends Component<Props> {
  onEmailChange(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChange(text) {
    const { passwordChanged } = this.props;
    passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            placeholder="email@gmail.com"
            onChangeText={(text) => { this.onEmailChange(text); }}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={password}
            placeholder="password"
            onChangeText={(text) => { this.onPasswordChange(text); }}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.auth.email,
    password: state.auth.password,
  }
);

export default connect(mapStateToProps, actions)(LoginForm);
