import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledInput = styled.input`
  border: none;
  border-bottom 1px solid black;
  padding: 10px 10px 5px 10px;
  font-size: ${props => props.fontSize};
  outline: 0;
  text-align: left;
  color: ${props => props.color};
  font-weight: 100;
  margin: ${props => props.margin};
  width: ${props => props.width};
  background: none;
  display: ${props => props.display};
  opacity: ${props => props.opacity};
  font-family: 'Fira Sans Condensed', sans-serif;

  &:focus {
    opacity: 1;props.name
  }

  &:-webkit-autofill:hover, &:-webkit-autofill:focus {
    transition: background-color 0s;
  }
`;

const InputContainer = styled.div`
  text-align: left;
  width: ${props => props.width};
  margin: 0 auto;
  font-family: 'Fira Sans Condensed', sans-serif;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.1em;
  color: rgb(100, 100, 100);
`;

class Input extends React.Component {
  constructor({
    fontSize,
    margin,
    color,
    width,
    display,
    placeholder,
    name,
    label,
    type,
    className,
  }) {
    super();
    this.state = {
      fontSize,
      margin,
      color,
      width,
      display,
      placeholder,
      name,
      label,
      opacity: 0.5,
      value: '',
      type,
      className,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === '') {
      this.setState({ opacity: 0.5 });
    } else {
      this.setState({ opacity: 1 });
    }
  }

  render() {
    const props = this.state;
    return (
      <InputContainer width={props.width}>
        <Label htmlFor={props.name}>
          {props.label}
          <br />
          <StyledInput
            autoComplete="off"
            id={props.name.toLowerCase()}
            {...props}
            placeholder={props.placeholder}
            name={props.name.toLowerCase()}
            onChange={this.onChange}
          />
        </Label>
      </InputContainer>
    );
  }
}

Input.propTypes = {
  fontSize: string,
  margin: string,
  color: string,
  width: string,
  display: string,
  name: string.isRequired,
  placeholder: string.isRequired,
  label: string.isRequired,
  type: string,
  className: string,
};

Input.defaultProps = {
  fontSize: '1em',
  margin: '10px auto 25px auto',
  color: 'black',
  width: '100%',
  display: 'block',
  type: 'text',
  className: '',
};

export default Input;
