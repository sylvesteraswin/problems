function makeAnagram(a, b) {
  let notMatchCount = 0;

  const aArr = a.split("");
  const bArr = b.split("");

  let arrToIterate;
  let arrToCheck;

  if (aArr.length > bArr.length) {
    arrToIterate = [...bArr];
    arrToCheck = [...aArr];
  } else {
    arrToIterate = [...aArr];
    arrToCheck = [...bArr];
  }

  for (let i = 0; i < arrToIterate.length; i++) {
    const indexOf = arrToCheck.indexOf(arrToIterate[i]);
    if (indexOf >= 0) {
      arrToCheck[indexOf] = 0;
      arrToIterate[i] = 0;
    }
  }

  return arrToCheck
    .filter(v => v !== 0)
    .concat(arrToIterate.filter(v => v !== 0)).length;
}

console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
