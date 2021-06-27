export const SIZES = {
  padding: 8,
  padding2: 12,

  margin: 8,
  margin2: 12,

  radius: 8,

  h1: 28,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 12,

  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
  body5: 10,
};

export const COLORS = {
  primary: '#0C174B',
  secondary: '#9AA0B8',
  border: '#CCD6DD',
  blue: '#0B63F6',
  darkBlue: '#003CC5',
  white: '#FFFFFF',
  black: '#0C174B',
  whiteOpacity: '#b3dbf1',
};

export const FONTS = {
  h1: { fontWeight: 'bold', fontSize: SIZES.h1 },
  h2: { fontWeight: 'bold', fontSize: SIZES.h2 },
  h3: { fontWeight: 'bold', fontSize: SIZES.h3 },
  h4: { fontWeight: 'bold', fontSize: SIZES.h4 },
  h5: { fontWeight: 'bold', fontSize: SIZES.h5 },
  h6: { fontWeight: 'bold', fontSize: SIZES.h6 },
};

const appThemes = { SIZES, COLORS, FONTS };
export default appThemes;