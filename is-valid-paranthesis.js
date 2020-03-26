function isValid(strs) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < strs.length; i++) {
    if (
      strs.charAt(i) === "(" ||
      strs.charAt(i) === "{" ||
      strs.charAt(i) === "["
    ) {
      stack.push(strs.charAt(i));
    } else {
      const last = stack.pop();
      if (strs[i] !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}

console.log(isValid("{[]}"));
