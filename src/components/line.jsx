import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledLine = styled.hr`
  border: 0;
  height: 1px;
  background: ${props => props.background};
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  font-family: 'Fira Sans Condensed', sans-serif;
`;

const Line = ({ background }) => {
  const props = { background };
  return <StyledLine {...props} />;
};

Line.propTypes = {
  background: string,
};

Line.defaultProps = {
  background: '#333',
};

export default Line;
