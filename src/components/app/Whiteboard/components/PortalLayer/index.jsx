import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const PortalLayer = ({ children }) => {
  const [node] = useState(document.createElement('div'));

  useEffect(
    () => {
      const parentNode = document.getElementById('whiteboard');
      parentNode.appendChild(node);

      return () => {
        parentNode.removeChild(node);
      };
    },
    [],
  );

  ReactDOM.render(children, node);

  return null;
};

PortalLayer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortalLayer;
