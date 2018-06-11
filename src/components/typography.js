import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0;
  font-size: 30px;
  font-style: ${props => (props.fontStyle ? props.fontStyle : 'none')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'none')};
`;

export const H2 = styled(H1)`
  font-size: 24px;
`;

export const H3 = styled(H1)`
  font-size: 18px;
`;

export const H4 = styled(H1)`
  font-size: 15px;
`;

export const P = styled(H1)`
  margin: 5px 0;
  font-weight: normal;
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
`;
