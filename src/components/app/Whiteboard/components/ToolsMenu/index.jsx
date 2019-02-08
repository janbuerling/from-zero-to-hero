import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MousePointer } from 'styled-icons/fa-solid';
import { Pencil, TextWidth } from 'styled-icons/icomoon';
import { WhiteboardContext } from '../../index';
import DefaultIconButton from '../IconButton';

export const TOOLS = {
  POINTER: 'pointer',
  PENCIL: 'pencil',
  TEXT: 'text',
};

const ToolsMenu = ({ className }) => {
  const { currentTool, setCurrentTool } = useContext(WhiteboardContext);

  const IconButton = styled(DefaultIconButton)`
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.baraRed : theme.colors.white)}
    color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.baraRed)}
  `;

  return (
    <div className={className}>
      <IconButton
        isActive={currentTool === TOOLS.POINTER}
        onClick={() => setCurrentTool(TOOLS.POINTER)}
      >
        <MousePointer size={16} />
      </IconButton>

      <IconButton
        isActive={currentTool === TOOLS.PENCIL}
        onClick={() => setCurrentTool(TOOLS.PENCIL)}
      >
        <Pencil size={16} />
      </IconButton>

      <IconButton
        isActive={currentTool === TOOLS.TEXT}
        onClick={() => setCurrentTool(TOOLS.TEXT)}
      >
        <TextWidth size={18} />
      </IconButton>
    </div>
  );
};

ToolsMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ToolsMenu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 56px;
  z-index: 999;
`;
