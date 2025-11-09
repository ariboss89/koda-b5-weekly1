let result = "";

function showTableSize(tableSize) {
  for (let a = 1; a <= tableSize; a++) {
    for (let b = 1; b <= tableSize; b++) {
      result += b * a + "\t";
    }

    result += "\n";
  }

  console.log(result);
}

showTableSize(5);
