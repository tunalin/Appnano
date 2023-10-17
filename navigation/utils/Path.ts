import {parse} from 'react-native-redash';
export const getPathXCenter = (currentPath: string) => {
  const curves = parse(currentPath).curves;
  const startPoint = curves[0].to;
  const endPoint = curves[curves.length - 1].to;
  const centerX = (startPoint.x + endPoint.x) / 2;
  return centerX;
};
export const getPathXCenterByIndex = (tabPaths: any[], index: number) => {
    if (tabPaths[index]) {
      const curves = tabPaths[index].curves;
      if (curves && curves.length > 0) {
        const startPoint = curves[0].to;
        const endPoint = curves[curves.length - 1].to;
        const centerX = (startPoint.x + endPoint.x) / 2;
        return centerX;
      }
    }
    return 0; 
  };