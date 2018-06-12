import styled from 'styled-components';

export default styled.button`
  border: ${props => (props.primary ? '1px solid #1e90ff' : '1px solid black')};
  color: ${props => (props.primary ? 'white' : '1px solid black')};
  background: ${props => (props.primary ? '#1e90ff' : 'none')};
  border-radius: 3px;
  padding: ${props => (props.small ? '7px 12px' : '6px 25px')};
  font-size: ${props => (props.small ? '0.8em' : '0.9em')};
  cursor: pointer;
  transition-duration: 0.3s;
  margin: ${props => (props.margin ? props.margin : '20px auto')};

  &:hover {
    transition-duration: 0.3s;
    border: 1px solid #1364b2;
    color: ${props => (props.primary ? 'white' : '#1364b2')};
    background: ${props => (props.primary ? '#1364b2' : 'none')};
  }
`;
