/**
 * Converts a hex color code to an RGB color code.
 *
 * @param hex - The hex color code to convert, including the '#' prefix
 * @returns The RGB color code as a comma-separated string, or an empty string if the input is invalid
 */
export const getRgbByHex = (hex: string) => {
  // Validate hex string
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return "";
  }

  // Remove hash symbol
  const hexCode = hex.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hexCode.substring(0, 2), 16);
  const g = parseInt(hexCode.substring(2, 4), 16);
  const b = parseInt(hexCode.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
};
