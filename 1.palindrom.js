let out = "";
let outBack = "";
let result = "";

function checkPalindrom(word) {
  for (let a = 0; a < word.length; a++) {
    out += word[a].toLowerCase();
    outBack = outBack + word[word.length - 1 - a].toLowerCase();
  }

  if (out.toLowerCase() === outBack) {
    result = "Palindrom";
  } else {
    result = "Bukan Palindrom";
  }

  return result;
}

console.log(checkPalindrom("civic"));
