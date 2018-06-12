import styled from 'styled-components';

export default styled.div`
  -webkit-box-shadow: 14px 17px 42px -2px rgba(0, 0, 0, 0.20);
  -moz-box-shadow: 14px 17px 42px -2px rgba(0, 0, 0, 0.20);
  box-shadow: 14px 17px 42px -2px rgba(0, 0, 0, 0.20);
  border: 1px solid rgb(240, 240, 240);
  height: ${props => (props.height ? props.height : '350px')};
  margin: ${props => (props.margin ? props.margin : '10px auto')};
  grid-area: ${props => (props.gridArea ? props.gridArea : 'card')};
  padding: 20px;
  text-align: center;
  background: ${props => (props.background ? props.background : 'white')};
  color: ${props => (props.color ? props.color : 'black')};

  @media screen and (min-width: 700px) {
    width: ${props => (props.width ? props.width : '350px')};
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
