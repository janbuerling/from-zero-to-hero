import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const PortalLayer = ({ children }) => {
  const [node] = useState(document.createElement('div'));

  useLayoutEffect(
    () => {
      const parentNode = document.getElementById('root');
      parentNode.appendChild(node);

      return () => {
        parentNode.removeChild(node);
      };
    },
    [node],
  );

  React.Children.only(children);

  ReactDOM.render(children, node);

  return null;
};

PortalLayer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortalLayer;
