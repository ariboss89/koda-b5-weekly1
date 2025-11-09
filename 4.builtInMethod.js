//1. toLowerCase
//Kegunaan untuk mengecilkan seluruh huruf pada sebuah string
//contoh
let koda = "1. KoDa Tech Academy";
console.log(koda.toLowerCase());

//2. toUpperCase
//Kegunaan untuk membuat semua huruf pada sebuah string menjadi huruf besar
//contoh
let bogor = "2. koda tech academy camp at Bogor";
console.log(bogor.toUpperCase());

//3. POP
//Kegunaan untuk mengeluarkan element terakhir pada sebuah array
//contoh
let kota = ["Jakarta", " Yogyakarta", " Bukittinggi", " Sukabumi"];
console.log("3. Kota yang di keluarkan dari list adalah " + kota.pop());
console.log(
  "   Kota - kota yang pernah menjadi ibukota Republik Indonesia adalah " + kota
);

//4.REVERSE
//Kegunaan untuk membalikkan urutan isi dari sebuah array
//Contoh
let makanan = ["Gado-Gado ", "Ketoprak", "Bakso ", "Seblak "];
console.log("4.  " + makanan.reverse());

//5.INCLUDE
//Kegunaan untuk mengecek apakah sebuah data ada pada suatu array
//Contoh
let minuman = ["Kopi", "Teh", "Air Putih", "Es Jeruk"];
let drink = "Kopi";
let jawaban = "";

if (minuman.includes(drink) == true) {
  jawaban = "ADA";
} else {
  jawaban = "TIDAK";
}

console.log(
  `5. Apakah pada menu ${minuman} terdapat menu ${drink} ? 
  Jawabannya : ${jawaban}`
);
