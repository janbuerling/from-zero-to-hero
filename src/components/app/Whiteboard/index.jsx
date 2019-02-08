import React, { useRef, useState } from 'react';
import { Stage as KonvaStage } from 'react-konva';
import { ThemeProvider } from 'styled-components';
import uuidv4 from 'uuid/v4';
import theme from './styles';
import ToolsMenu from './components/ToolsMenu';
import { getNodeByTool } from './helper';

export const WhiteboardContext = React.createContext({ test: 123 });

const Whiteboard = () => {
  const [currentLayerId, setCurrentLayerId] = useState(null);
  const [currentTool, setCurrentTool] = useState(null);
  const [stageLayers, setStageLayers] = useState([]);
  const [stageMouseEvent, setStageMouseEvent] = useState(undefined);
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
  const onMouseMove = ({ evt }) => setStageMouseEvent(evt);

  /**
   * @description onMouseUp event from KonvaStage if mouse went up.
   * @param evt
   */
  const onMouseUp = ({ evt }) => {
    setCurrentLayerId(null);
    setStageMouseEvent(evt);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
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
          <WhiteboardContext.Provider
            value={{
              currentLayerId,
              currentTool,
              setCurrentTool,
              stageMouseEvent,
              stageRef,
            }}
          >
            {stageLayers.map(layer => (<layer.Component key={layer.id} layerId={layer.id} />))}
          </WhiteboardContext.Provider>
        </ThemeProvider>
      </KonvaStage>
    </div>
  );
};

export default Whiteboard;
