import TextLayer from './components/TextLayer';
import { TOOLS } from './components/ToolsMenu';

export const getNodeByTool = (tool) => {
  switch (tool) {
    case TOOLS.TEXT:
      return TextLayer;
    default:
      return undefined;
  }
};
