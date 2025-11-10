const arrSuhu = [];

function konversiSuhuFromCelcius(inputSuhu) {
  arrSuhu.push(`Suhu reamur nya : ${(4 / 5) * inputSuhu}`);
  arrSuhu.push(`Suhu Fahrenheitnya adalah : ${9/5*inputSuhu}`);

  return arrSuhu;
}

console.log(konversiSuhuFromCelcius(30));
