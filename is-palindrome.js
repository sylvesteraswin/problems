/* function isPalindrome(x) {
  let mayBe = true;
  const xString = x + "";
  let i = 0;
  let j = xString.length - 1;

  while (mayBe && i <= j) {
    if (xString.charAt(i) === xString.charAt(j)) {
      ++i;
      --j;
    } else {
      mayBe = false;
    }
  }
  return mayBe;
} */

function isPalindrome(x) {
  const xString = x + "";

  return (
    xString ===
    xString
      .split("")
      .reverse()
      .join("")
  );
}

console.log(isPalindrome(12133121));
console.log(isPalindrome(-1211));
console.log(isPalindrome(10));
