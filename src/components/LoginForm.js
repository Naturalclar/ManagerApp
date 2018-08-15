import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
} from './common';

type Props = {
  emailChanged: Function,
  passwordChanged: Function,
  loginUser: Function,
  email: String,
  password: String,
  error: String,
  loading: Boolean,
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

class LoginForm extends Component<Props> {
  onEmailChange(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChange(text) {
    const { passwordChanged } = this.props;
    passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
    return <View />;
  }

  renderButton() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={() => { this.onButtonPress(); }}
      >
        {'Login'}
      </Button>
    );
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

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  }
);

export default connect(mapStateToProps, actions)(LoginForm);
