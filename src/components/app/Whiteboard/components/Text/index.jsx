import PropTypes from 'prop-types';
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Text as KonvaText } from 'react-konva';
import styled from 'styled-components';
import useMousePosition from '../../hooks/useMousePosition';
import { WhiteboardContext } from '../../index';
import PortalLayer from '../PortalLayer';

const Text = ({ shapeId }) => {
  const { currentShapeId, editMode, setEditMode } = useContext(WhiteboardContext);
  const [textValue, setTextValue] = useState('');
  const [textWidth, setTextWidth] = useState(200);
  const textRef = useRef(null);
  const textareaRef = useRef(null);
  const position = useMousePosition();

  useEffect(() => {
    const { current: currentTextRef } = textRef;
    if (currentTextRef) setTextWidth(currentTextRef.getTextWidth());
  }, [textRef]);

  if (editMode) {
    const EditContainer = styled.div`
      position: absolute;
      top: ${position.y}px;
      left: ${position.x}px;
    `;

    const Textarea = styled.textarea`
      width: ${textWidth}px;
   `;

    return (
      <PortalLayer>
        <EditContainer>
          <Textarea
            defaultValue={shapeId}
            ref={textareaRef}
          />
        </EditContainer>
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
