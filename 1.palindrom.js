let word = "Rotator";
let out = "";
let outBack = "";

for (let a = 0; a < word.length; a++) {
  out += word[a].toLowerCase();
  outBack += word[word.length - 1 - a].toLowerCase();
}

if (out === outBack) {
  console.log("Palindrom");
} else {
  console.log("Bukan Palindrom");
}
