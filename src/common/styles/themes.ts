// ==> Interfaces
import { DefaultTheme } from "@interfaces/theme.interface";

// Helpers
import { getRgbByHex } from "@helpers/helpers";

// ==> Color
const colors = {
  white: "#FFFFFF",
  white2: "#EBEDEF",
  white3: "#F6F8FA",

  black: "#010409",
  black2: "#0d1117",
  black3: "#161B22",

  blue: "#2b78f0",
  lightBlue: "#2b78f0",

  green: "#238636",
  limeGreen: "#00C853",
};

export const lightTheme: DefaultTheme = {
  primary: colors?.white3,
  secundary: colors?.black,
  tertiary: colors?.white,
  quaternary: colors?.white2,

  primaryRgb: getRgbByHex(colors?.white3),
  secundaryRgb: getRgbByHex(colors?.black),
  tertiaryRgb: getRgbByHex(colors?.white),
  quaternaryRgb: getRgbByHex(colors?.white2),

  light: colors?.white,
  light2: colors?.white2,
  light3: colors?.white3,

  black: colors?.black,
  black2: colors?.black2,
  black3: colors?.black3,

  blue: colors?.blue,
  blueRgb: getRgbByHex(colors?.blue),
  lightBlue: colors?.lightBlue,

  green: colors?.green,
  limeGreen: colors?.limeGreen,

  filterToDark: "invert(1) grayscale(100%) brightness(200%)",
  filterToLight: "none",
};

export const darkTheme: DefaultTheme = {
  primary: colors?.black,
  secundary: colors?.white,
  tertiary: colors?.black2,
  quaternary: colors?.black3,

  primaryRgb: getRgbByHex(colors?.black),
  secundaryRgb: getRgbByHex(colors?.white),
  tertiaryRgb: getRgbByHex(colors?.black2),
  quaternaryRgb: getRgbByHex(colors?.black3),

  light: colors?.white,
  light2: colors?.white2,
  light3: colors?.white3,

  black: colors?.black,
  black2: colors?.black2,
  black3: colors?.black3,

  blue: colors?.blue,
  blueRgb: getRgbByHex(colors?.blue),
  lightBlue: colors?.lightBlue,

  green: colors?.green,
  limeGreen: colors?.limeGreen,

  filterToDark: "none",
  filterToLight: "invert(1) grayscale(100%) brightness(200%)",
};
