export const fontFamilies = {
  primary: 'Nunito, sans-serif',
  secondary: 'DM Sans, sans-serif',
} as const

const commonTypography = {
  letterSpacing: '0px',
} as const

export const headings = {
  h1: {
    fontFamily: fontFamilies.primary,
    fontSize: '48px',
    lineHeight: '72px',
    fontWeight: 700,
    ...commonTypography,
  },
  h2: {
    fontFamily: fontFamilies.primary,
    fontSize: '40px',
    lineHeight: '60px',
    fontWeight: 700,
    ...commonTypography,
  },
  h3: {
    fontFamily: fontFamilies.primary,
    fontSize: '34px',
    lineHeight: '51px',
    fontWeight: 700,
    ...commonTypography,
  },
  h4: {
    fontFamily: fontFamilies.primary,
    fontSize: '28px',
    lineHeight: '42px',
    fontWeight: 700,
    ...commonTypography,
  },
  h5: {
    fontFamily: fontFamilies.primary,
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 700,
    ...commonTypography,
  },
  h6: {
    fontFamily: fontFamilies.primary,
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 500,
    ...commonTypography,
  },
} as const

export const body = {
  b1: {
    fontFamily: fontFamilies.secondary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    ...commonTypography,
  },
  b2: {
    fontFamily: fontFamilies.secondary,
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400,
    ...commonTypography,
  },
  b3: {
    fontFamily: fontFamilies.secondary,
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,
    ...commonTypography,
  },
  b4: {
    fontFamily: fontFamilies.secondary,
    fontSize: '10px',
    lineHeight: '15px',
    fontWeight: 400,
    ...commonTypography,
  },
} as const
