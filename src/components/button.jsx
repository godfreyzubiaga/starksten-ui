import React from 'react';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';

const StyledButton = styled.button`
  border: ${props => (props.primary ? '1px solid #1e90ff' : '1px solid black')};
  color: ${props => (props.primary ? 'white' : '1px solid black')};
  background: ${props => (props.primary ? '#1e90ff' : 'none')};
  border-radius: 3px;
  padding: ${props => (props.small ? '7px 12px' : '6px 25px')};
  font-size: ${props => (props.small ? '0.8em' : '0.9em')};
  cursor: pointer;
  transition-duration: 0.3s;
  margin: ${props => props.margin};
  display: block;
  font-family: 'Fira Sans Condensed', sans-serif;

  &:hover {
    transition-duration: 0.3s;
    border: 1px solid #1364b2;
    color: ${props => (props.primary ? 'white' : '#1364b2')};
    background: ${props => (props.primary ? '#1364b2' : 'none')};
  }
`;

const Button = ({
  primary, small, margin, name, action,
}) => {
  const props = { primary, small, margin };
  return (
    <StyledButton {...props} onClick={action}>
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: bool,
  small: bool,
  margin: string,
  name: string.isRequired,
  action: func.isRequired,
};

Button.defaultProps = {
  primary: false,
  small: false,
  margin: '20px auto',
};

export default Button;
