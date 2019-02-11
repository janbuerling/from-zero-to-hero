import uuidv4 from 'uuid/v4';
import Text from './components/Text';
import { TOOLS } from './components/ToolsMenu';

export const getShapeByTool = (tool) => {
  switch (tool) {
    case TOOLS.TEXT:
      return { id: uuidv4(), Component: Text };
    default:
      return undefined;
  }
};
