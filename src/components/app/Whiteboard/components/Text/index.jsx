import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text as KonvaText } from 'react-konva';
import useMousePosition from '../../hooks/useMousePosition';
import { WhiteboardContext } from '../../index';
import PortalLayer from '../PortalLayer';

const Text = ({ shapeId }) => {
  const { currentShapeId, editMode, setEditMode } = useContext(WhiteboardContext);
  const [textValue, setTextValue] = useState('');
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);
  const position = useMousePosition();

  useEffect(() => {
    const { current: currentTextRef } = textRef;
    if (currentTextRef) setTextWidth(currentTextRef.getTextWidth());
  }, [textRef]);

  if (editMode) {
    return (
      <PortalLayer>
        <textarea
          defaultValue={textValue}
          style={{
            position: 'absolute',
            top: `${position.y - 4}px`,
            left: `${position.x - 4}px`,
            width: `${textWidth + 8}px`,
            minWidth: '100px',
          }}
          onChange={({ target }) => setTextValue(target.value)}
        />
      </PortalLayer>
    );
  }

  return (
    <KonvaText
      draggable
      onDblClick={() => setEditMode(true)}
      position={position}
      ref={textRef}
      text={textValue}
    />
  );
};

Text.propTypes = {
  shapeId: PropTypes.string.isRequired,
};

export default Text;
