import styled from 'styled-components';

export default styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => (props.background ? props.background : 'inherit')};
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  margin ${props => (props.margin ? props.margin : 'auto')};
  padding: ${props => (props.padding ? props.padding : 'none')};
  color: ${props => (props.color ? props.color : 'black')};
`;
