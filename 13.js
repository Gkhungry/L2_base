function hexStringToRGB(hexString) {
    hexString = hexString.toLowerCase().startsWith('#') ? hexString.slice(1) : hexString;
    const r = parseInt(hexString.slice(0, 2), 16);
    const g = parseInt(hexString.slice(2, 4), 16);
    const b = parseInt(hexString.slice(4, 6), 16);
    return { r, g, b };
  }