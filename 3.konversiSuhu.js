function konversiSuhuCelciusFahrenheit(inputSuhu) {
  console.log(`Suhu Fahrenheit nya : ${(9*inputSuhu) / 5 +32}`);
}

function konversiSuhuFahrenheitCelcius(inputSuhu) {
  console.log(`Suhu Celcius nya : ${((inputSuhu-32) *5) / 9 }`);
}

konversiSuhuCelciusFahrenheit(26);
konversiSuhuFahrenheitCelcius(79);
