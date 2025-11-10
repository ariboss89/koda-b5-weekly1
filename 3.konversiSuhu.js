const arrSuhu = [];

function konversiSuhuCelciusFahrenheit(inputSuhu) {
  arrSuhu.push(`Suhu Fahrenheit nya : ${(9 / 5* inputSuhu)+32}`);
  return arrSuhu;
}

function konversiSuhuFahrenheitCelcius(inputSuhu) {

  konversiSuhuCelciusFahrenheit(inputSuhu);

  arrSuhu.push(`Suhu Celcius nya : ${(5/9* inputSuhu) - 32 }`);

  return arrSuhu;
}

console.log(konversiSuhuFahrenheitCelcius(30));
