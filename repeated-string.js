function repeatedString(s, n) {
  if (s.length === 1 && s === "a") {
    return n;
  }

  let as = s.split("").filter(value => value === "a").length;
  if (typeof s === "string") {
    as =
      parseInt(n / s.length) * as +
      s
        .slice(0, n % s.length)
        .split("")
        .filter(value => value === "a").length;
  }

  console.log(as);

  return as;
}

console.log(repeatedString("aab", 882787));
