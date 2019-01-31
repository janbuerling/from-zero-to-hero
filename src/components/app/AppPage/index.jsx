import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

class AppPageComponent extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={`app-page ${className}`}>
        Hello World
      </div>
    );
  }
}

export default styled(AppPageComponent)`
  max-width: 1200px;
  margin: 0 auto;
`;
