import { createTheme } from "@mui/material"

// file imports
import { DarkTheme, LightTheme } from "./colors"
import SFUITextBold from "../../assets/sf-ui/SFUIText-Bold.ttf"
import SFUITextBoldItalic from "../../assets/sf-ui/SFUIText-BoldItalic.ttf"
import SFUITextHeavy from "../../assets/sf-ui/SFUIText-Heavy.ttf"
import SFUITextHeavyItalic from "../../assets/sf-ui/SFUIText-HeavyItalic.ttf"
import SFUITextLight from "../../assets/sf-ui/SFUIText-Light.ttf"
import SFUITextLightItalic from "../../assets/sf-ui/SFUIText-LightItalic.ttf"
import SFUITextMedium from "../../assets/sf-ui/SFUIText-Medium.ttf"
import SFUITextMediumItalic from "../../assets/sf-ui/SFUIText-MediumItalic.ttf"
import SFUITextRegular from "../../assets/sf-ui/SFUIText-Regular.ttf"
import SFUITextRegularItalic from "../../assets/sf-ui/SFUIText-RegularItalic.ttf"
import SFUITextSemiBold from "../../assets/sf-ui/SFUIText-Semibold.ttf"
import SFUITextSemiboldItalic from "../../assets/sf-ui/SFUIText-SemiboldItalic.ttf"

const AppTheme = (themeMode: boolean) => createTheme({
	typography: {
		fontFamily: "SFUI-Text, sans-serif"
	},
	palette: {
		...(themeMode ? DarkTheme : LightTheme)
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
					@font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 400;
						font-display: swap;
						src: local('SFUI-TextRegular'), local('SFUI-Text'), url(${SFUITextRegular}) format('truetype');
					}
					@font-face {
						font-family: 'SFUI-Text';
						font-style: italic;
						font-weight: 400;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextRegularItalic}) format('truetype');
					}
					@font-face {
						font-family: 'SFUI-Text';
						font-style: bold;
						font-weight: 700;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextBold}) format('truetype');
					}
					@font-face {
						font-family: 'SFUI-Text';
						font-style: italic;
						font-weight: 700;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextBoldItalic}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 300;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextLight}) format('truetype');
					}
					@font-face {
						font-family: 'SFUI-Text';
						font-style: italic;
						font-weight: 300;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextLightItalic}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 500;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextHeavy}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: italic;
						font-weight: 500;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextHeavyItalic}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 600;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextMedium}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: italic;
						font-weight: 600;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextMediumItalic}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 650;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextSemiBold}) format('truetype');
					}
          @font-face {
						font-family: 'SFUI-Text';
						font-style: normal;
						font-weight: 650;
						font-display: swap;
						src: local('SFUI-Text'), url(${SFUITextSemiboldItalic}) format('truetype');
					}
				`
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: "SFUI-Text, sans-serif"
				}
			}
		}
	}
})

export default AppTheme
