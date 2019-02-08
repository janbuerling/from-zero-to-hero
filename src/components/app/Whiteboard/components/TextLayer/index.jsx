import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Layer as KonvaLayer, Text as KonvaText } from 'react-konva';
import { WhiteboardContext } from '../../index';

const TextLayer = ({ id }) => {
  // const { currentLayerId, stageMouseEvent } = useContext(WhiteboardContext);

  const textProps = {
    text: id,
  };

  // if (id === currentLayerId) {
  //   const { offsetX, offsetY } = stageMouseEvent;
  //
  //   textProps.x = offsetX;
  //   textProps.y = offsetY;
  // }

  return (
    <KonvaLayer>
      <KonvaText {...textProps} />
    </KonvaLayer>
  );
};

TextLayer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TextLayer;
