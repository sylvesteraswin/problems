function longestCommonPrefix(strs) {
  let common = "";
  if (strs.length === 0) {
    return common;
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let index = 0;
  let notEqual = false;

  while (!notEqual) {
    let char;
    for (let i = 0; i < strs.length; i++) {
      const charAtIndex = strs[i].charAt(index);
      if (char === undefined) {
        char = charAtIndex;
      }
      if (char !== charAtIndex || charAtIndex === "") {
        notEqual = true;
        char = "";
        break;
      }
    }
    ++index;
    common += char;
  }

  return common;
}

console.log(longestCommonPrefix(["", ""]));
