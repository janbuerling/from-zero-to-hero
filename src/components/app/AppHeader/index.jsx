import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from 'styled-icons/boxicons-logos';

const AppHeader = ({ className }) => (
  <div className={className}>
    <ReactLogo size={40} />
    <p>React Schulung</p>
  </div>
);

AppHeader.propTypes = {
  className: PropTypes.string,
};

AppHeader.defaultProps = {
  className: null,
};

export default styled(AppHeader)`
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 60px;
  padding: 10px;
  position: relative;
  z-index: 99;
  font-weight: 400;
`;
