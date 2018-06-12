import styled from 'styled-components';

export default styled.hr`
  border: 0;
  height: 1px;
  background: ${props => (props.background ? props.background : '#333')};
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;
