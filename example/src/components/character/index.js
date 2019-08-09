import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@rebass/grid';
import styled from 'styled-components';

const Background = styled(Box)`
  background-color: white;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;

const Character = ({ forename, surname, description, balance, onSelect }) => (
  <Background>
    <h1>
      {forename} {surname}
    </h1>
    <p>{description}</p>
    <p>${balance}</p>
    <button onClick={onSelect}>Select</button>
  </Background>
);

Character.propTypes = {
  forename: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  description: PropTypes.string,
  balance: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Character;
