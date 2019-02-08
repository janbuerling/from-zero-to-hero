import { rgba, lighten, transitions } from 'polished';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const IconButton = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick} type='button'>
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default styled(IconButton)`
  background-color: #FFFFFFF;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 8px 0 ${rgba('#000000', 0.2)};
  color: #ED4C67;
  cursor: pointer;
  height: 40px;
  margin: 8px;
  outline: none;
  transform: rotate(45deg);
  width: 40px;
  
  :active {
    background-color: ${lighten(0.2, '#ED4C67')};
  }
  
  :hover {
    background-color: #ED4C67;
    color: #FFFFFF;
    ${transitions('background-color 0.2s ease-in-out 0s', 'color 0.2s ease-in-out 0s')};
  }
  
  > * {
    transform: rotate(-45deg);
  }
`;
