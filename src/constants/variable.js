import { Platform } from 'react-native';
import metrics from '../metrics';
import fonts  from './fonts';
import colors from './colors';
import { Appearance } from 'react-native';



export const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
  MATERIAL: 'material',
  WEB: 'web'
};

const deviceHeight = metrics.screenHeight;
const deviceWidth = metrics.screenWidth;
const colorScheme = Appearance.getColorScheme();
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platformStyle,
  platform,
  deviceHeight,
  deviceWidth,
  isIphoneX,
  size: fonts.size,
  weight: fonts.weight,
  type: fonts.type,
  colors : colors,
  colorScheme,

  // sample only
  CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
};
