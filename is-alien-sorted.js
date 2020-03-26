function isAlienSorted(words, order) {
  const alphaArray = [];
  const aCharCode = "a".charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    alphaArray[order.charCodeAt(i) - aCharCode] = i;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const parseLength = Math.min(words[i].length, words[j].length);
      for (let k = 0; k < parseLength; k++) {
        const charI = alphaArray[words[i].charCodeAt(k) - aCharCode];
        const charJ = alphaArray[words[j].charCodeAt(k) - aCharCode];
        if (charI < charJ) {
          break;
        } else if (charI > charJ) {
          return false;
        } else if (k === parseLength - 1 && words[i].length > words[j].length) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
