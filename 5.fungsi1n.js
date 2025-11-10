function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function loopNumberTillN(num) {
  for (let a = 0; a < num; a++) {
    await delay(1000);
    console.log("Angka ke:", a + 1);
  }
  console.log("Async function finished ...");
}

loopNumberTillN(10);
