import React from 'react';
import { bool, func } from 'prop-types';
import Input from './input';
import Card from './card';
import VCD from './vcd';
import Button from './button';
import { P } from './typography';

class LoginForm extends React.Component {
  constructor({ email, loginAction }) {
    super();
    this.state = {
      email,
      loginAction,
    };
  }

  render() {
    const props = this.state;
    const { loginAction } = this.state;
    const getData = () => {
      const inputs = document.getElementsByClassName('formInput');
      const size = inputs.length;
      const data = {};
      for (let i = 0; i < size; i += 1) {
        data[inputs[i].id] = inputs[i].value;
      }
      return data;
    };

    return (
      <Card>
        <VCD width="80%">
          <P fontSize="1.5em" margin="0 0 20px 0">
            Login Form
          </P>
          {props.email ? (
            <Input
              name="form-email"
              className="formInput"
              placeholder="Email"
              label="Email"
              type="email"
            />
          ) : (
            <Input
              name="form-username"
              className="formInput"
              placeholder="Username"
              label="Username"
              type="text"
            />
          )}
          <Input
            name="form-password"
            className="formInput"
            placeholder="Password"
            label="Password"
            type="password"
          />
          <Button name="Login" primary action={() => loginAction(getData())} />
        </VCD>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  email: bool,
  loginAction: func.isRequired,
};

LoginForm.defaultProps = {
  email: false,
};

export default LoginForm;
