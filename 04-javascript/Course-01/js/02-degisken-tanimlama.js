// var serverName = "kodluyoruz.org";

// console.log(serverName);

// Artık let ve const kullanılıyor:

// değişken tanımlama
let serverName;

console.log(serverName); //output:undefined
// değişken atama
serverName = "kodluyoruz.org";

console.log(serverName);

//Tanımlarken atama yapma
let password = "1234";

console.log(password);

//atama yapmadan kullanma
let fullName = "Oğuzhan Sofuoğlu";
fullName = "Deneme İsim";
console.log(fullName); //output:Reference error before initialization

// atama yapmadan var ile kullanma
// console.log(fullName1); //output:undefined BU YÜZDEN HATAYI GÖREMEZDİK.
// var fullName1 = "Oğuzhan Sofuoğlu";

//Const ile değişkeni boş tanımlamaya çalışmak

const SERVER_PASSWORD = "123456server";

// SERVER_PASSWORD = "değiş"; --> yapılamaz hata verir.

console.log(SERVER_PASSWORD);

// aşağı yuvarlama math.floor

//yukarı yuvarlama math.ceil

//Yakına yuvarlama math.round

//Number --> To int

let newNumber = Number("12");
console.log(newNumber);
