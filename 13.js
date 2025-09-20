function hexStringToRGB(hexString) {
    return {
      r: parseInt(hexString.substr(1, 2), 16),
      g: parseInt(hexString.substr(3, 2), 16),
      b: parseInt(hexString.substr(5, 2), 16),
    };
  }