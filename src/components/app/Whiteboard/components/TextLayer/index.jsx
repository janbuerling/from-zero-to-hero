import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Layer as KonvaLayer, Text as KonvaText } from 'react-konva';
import { WhiteboardContext } from '../../index';

const usePosition = (layerId) => {
  const { currentLayerId, stageMouseEvent } = useContext(WhiteboardContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (layerId === currentLayerId) {
      const { offsetX: nextOffsetX, offsetY: nextOffsetY } = stageMouseEvent || { offsetX: 0, offsetY: 0 };

      setPosition({ x: nextOffsetX, y: nextOffsetY });
    }
  }, [stageMouseEvent]);

  return position;
};

const TextLayer = ({ layerId }) => {
  const { x, y } = usePosition(layerId);

  return (
    <KonvaLayer>
      <KonvaText
        text={layerId}
        x={x}
        y={y}
      />
    </KonvaLayer>
  );
};

TextLayer.propTypes = {
  layerId: PropTypes.string.isRequired,
};

export default TextLayer;
