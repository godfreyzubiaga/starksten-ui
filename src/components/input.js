import styled from 'styled-components';

export default styled.input`
  border: none;
  border-bottom 2px solid black;
  padding: 10px 10px 5px 10px;
  transition-duration: 0.4s;
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  outline: 0;
  text-align: left;
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: 100;
  margin: 20px auto 30px auto;
  width: ${props => (props.width ? props.width : 'auto')};
  background: none;
  display: ${props => (props.display ? props.display : 'inline-block')};
  opacity: 0.5;

  &:focus {
    opacity: 1;
    transition-duration: 0.4s;
  }

  &:-webkit-autofill:hover, &:-webkit-autofill:focus {
    transition: background-color 0s;
  }
`;
