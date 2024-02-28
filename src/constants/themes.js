import { Appearance } from 'react-native';
const colorScheme = Appearance.getColorScheme();


export default color = {
    Business_Name_Color: "#A437DB",
    Background_Color: "#35185A",
    Slogan_Color: "#B19DD0",
    Icon_Color: "#B19DD0",
    Quaternary_Color: "#35185A",
    primary_color : colorScheme == 'dark' ?  '#0091EA':'#0091EA', //blue
    dark_primary_color : colorScheme == 'dark' ?  '#0068A8':'#0068A8', //blue
    primary_color_opacity : '#0091EAD1', //blue
    black_color  : '#0e0e0e',
    green_color : '#0D842B',
    text_light_color : '#575757', //light-grey
    border_light_color : '#EFEFEF',
    light_color_opacity : '#EFEFEF71',
    border_color : '#b0b0b0',
    base_color : '#ffffff', //white
    popup_background: "#393939ad",
    light_gray: '#d0d0d0',
    danger: "#db0000",
    transparent: '#00000000',
    text_dark: '#1D3947',
    text_light: '#5F636C',
    background_color_dark: '#007DCAA8',
    background_color_light: '#D3E2E7',
    cardBackground: '#E8EFF1',
    highlightColor: '#E6F2F6',
    gradientColor1: 'rgba(177, 213, 226, 0.88)',
    gradientColor2: '#489FD4',
    gradientColor3: '#268BC8',
    light_yellow_background: "#EBFAE3",
    yellow_background: "#FDF6B2",
    text_dark_brown: "#8E4B10",
    border_outline: "#0074BB",
    splash_bg: "#E8EFF1"
}