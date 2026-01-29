import { body, effects, fontFamilies, headings, radius, spacing, stroke } from './tokens'

export const commonTheme = {
  typography: {
    fontFamilies,
    headings,
    body,
  },

  palette: {
    primary: {
      100: '#FFE5EC',
      200: '#FF92AC',
      300: '#FF547D',
      400: '#FF154D',
      500: '#D50033',
      600: '#970024',
      Alpha10: '#FFD1DC1A',
      Alpha50: '#FFD1DC80',
    },
    secondary: {
      100: '#F8B3CD',
      200: '#F37EAA',
      300: '#EE4A88',
      400: '#E91665',
      500: '#B5114F',
      600: '#800C38',
      Alpha10: '#F8B3CD1A',
      Alpha50: '#F8B3CD80',
    },
    accent: {
      100: '#F3D1DF',
      200: '#E8A3BF',
      300: '#DC729D',
      400: '#CF407A',
      500: '#A82A5D',
      600: '#771E42',
      alpha: {
        10: '#E8A3BF1A',
        50: '#E8A3BF80',
      },
    },
    neutral: {
      white: '#FFF',
      200: '#F9F9F9',
      300: '#D2D2D2',
      400: '#BBBBBB',
      500: '#A4A4A4',
      600: '#8E8E8E',
      700: '#777777',
      800: '#606060',
      900: '#4A4A4A',
      1000: '#111111',
      alpha: {
        10: '#3333331A',
        50: '#33333380',
      },
    },
    error: {
      100: '#FFCDD1',
      200: '#FF9AA2',
      300: '#FF5A67',
      400: '#FF1A2C',
      500: '#D90011',
      600: '#99000C',
      alpha: {
        10: '#FF9AA21A',
        50: '#FF9AA280',
      },
    },
    warning: {
      100: '#FFB7B2',
      200: '#FF8178',
      300: '#FF4A3E',
      400: '#FF1403',
      500: '#C80D00',
      600: '#8E0900',
      alpha: {
        10: '#FFB7B21A',
        50: '#FFB7B280',
      },
    },
    success: {
      100: '#EFF6F3',
      200: '#B5E5CF',
      300: '#86D4B0',
      400: '#56C491',
      500: '#39A171',
      600: '#206143',
      alpha: {
        10: '#B5E5CF1A',
        50: '#B5E5CF80',
      },
    },
  },
  spacing,
  radius,
  stroke,
  effects,
}

export const lightTheme = {
  ...commonTheme,
  meta: { mode: 'light' },
}

export const darkTheme = {
  ...commonTheme,
  meta: { mode: 'dark' },
}
