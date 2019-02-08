import React, { useRef, useState } from 'react';
import { Stage as KonvaStage } from 'react-konva';
import uuidv4 from 'uuid/v4';
import TextLayer from './components/TextLayer';
import ToolsMenu from './components/ToolsMenu';
import { getNodeByTool } from './helper';

export const WhiteboardContext = React.createContext({ test: 123 });

const Whiteboard = () => {
  const [currentLayerId, setCurrentLayerId] = useState(null);
  const [currentTool, setCurrentTool] = useState(null);
  const [stageLayers, setStageLayers] = useState([]);
  const [stageMouseEvent, setStageMouseEvent] = useState(null);
  const stageRef = useRef(null);

  /**
   * @description onMouseDown event from KonvaStage if mouse went down.
   * @param evt
   */
  const onMouseDown = ({ evt }) => {
    if (!currentTool) return;

    const layer = { id: uuidv4(), Component: getNodeByTool(currentTool) };

    setCurrentLayerId(layer.id);
    setStageLayers([...stageLayers, layer]);
    setStageMouseEvent(evt);
  };

  /**
   * @description onMouseMove event from KonvaStage if mouse moved.
   * @param evt
   */
  const onMouseMove = ({ evt }) => {};

  /**
   * @description onMouseUp event from KonvaStage if mouse went up.
   * @param evt
   */
  const onMouseUp = ({ evt }) => {};

  return (
    <WhiteboardContext.Provider
      value={{
        currentLayerId,
        currentTool,
        setCurrentTool,
        stageMouseEvent,
        stageRef,
      }}
    >
      <ToolsMenu onToolChange={setCurrentTool} />

      <KonvaStage
        height={window.innerHeight}
        onContentMouseDown={onMouseDown}
        onContentMouseMove={onMouseMove}
        onContentMouseUp={onMouseUp}
        ref={stageRef}
        width={window.innerWidth}
      >
        <TextLayer id={currentLayerId} />
      </KonvaStage>
    </WhiteboardContext.Provider>
  );
};

export default Whiteboard;
