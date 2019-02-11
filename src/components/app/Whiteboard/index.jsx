import React, { useRef, useState } from 'react';
import { Layer as KonvaLayer, Stage as KonvaStage } from 'react-konva';
import { ThemeProvider } from 'styled-components';
import theme from './styles';
import ToolsMenu, { TOOLS } from './components/ToolsMenu';
import { getShapeByTool } from './helper';

export const WhiteboardContext = React.createContext({ test: 123 });

const Whiteboard = () => {
  const [currentShapeId, setCurrentShapeId] = useState(null);
  const [currentTool, setCurrentTool] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [stageMouseEvent, setStageMouseEvent] = useState(undefined);
  const stageRef = useRef(null);

  /**
   * @description add a new shape to the stage
   */
  const addShape = () => {
    const newShape = getShapeByTool(currentTool);

    setCurrentShapeId(newShape.id);
    setEditMode(true);
    setShapes([...shapes, newShape]);
  };

  /**
   * @description onMouseDown event from KonvaStage if mouse went down.
   * @param event
   */
  const onMouseDown = ({ evt }) => {
    if (!currentTool) return;

    if (currentTool !== TOOLS.POINTER) {
      addShape();
    }

    setStageMouseEvent(evt);
  };

  /**
   * @description onMouseMove event from KonvaStage if mouse moved.
   * @param event
   */
  const onMouseMove = ({ evt }) => setStageMouseEvent(evt);

  /**
   * @description onMouseUp event from KonvaStage if mouse went up.
   * @param event
   */
  const onMouseUp = ({ evt }) => {
    setCurrentShapeId(null);
    setStageMouseEvent(evt);
  };

  const providerValue = {
    currentShapeId,
    currentTool,
    editMode,
    setCurrentTool,
    setEditMode,
    stageMouseEvent,
    stageRef,
  };

  return (
    <div id='whiteboard'>
      <ThemeProvider theme={theme}>
        <WhiteboardContext.Provider value={providerValue}>
          <ToolsMenu onToolChange={setCurrentTool} />
        </WhiteboardContext.Provider>
      </ThemeProvider>

      <KonvaStage
        height={window.innerHeight}
        onContentMouseDown={onMouseDown}
        onContentMouseMove={onMouseMove}
        onContentMouseUp={onMouseUp}
        ref={stageRef}
        width={window.innerWidth}
      >
        <ThemeProvider theme={theme}>
          <WhiteboardContext.Provider value={providerValue}>
            <KonvaLayer>
              {shapes.map(shape => (<shape.Component key={shape.id} shapeId={shape.id} />))}
            </KonvaLayer>
          </WhiteboardContext.Provider>
        </ThemeProvider>
      </KonvaStage>
    </div>
  );
};

export default Whiteboard;
