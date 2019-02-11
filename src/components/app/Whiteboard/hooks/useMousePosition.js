import { useContext, useLayoutEffect, useState } from 'react';
import { WhiteboardContext } from '../index';

/**
 * @description get the new position of the mouse. If you pass a shape ID you will get only the new position if
 * its active.
 * @param shapeId
 */
const useMousePosition = (shapeId = null) => {
  const { currentShapeId, stageMouseEvent } = useContext(WhiteboardContext);
  const { offsetX = 0, offsetY = 0 } = stageMouseEvent;
  const [position, setPosition] = useState({ x: offsetX, y: offsetY });

  useLayoutEffect(() => {
    if (!shapeId || shapeId === currentShapeId) {
      setPosition({ x: offsetX, y: offsetY });
    }
  }, [stageMouseEvent]);

  return position;
};

export default useMousePosition;
