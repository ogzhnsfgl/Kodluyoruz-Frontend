var walter = document.getElementById("walterwhite");

console.log(walter);

var listClass = document.querySelectorAll(".alternate");

console.log(listClass);

listClass.forEach((element) => {
  element.style.color = "red";
});

// Liste içine yeni öğe ekleme

var allList = document.querySelector("ul");
console.log(allList);

var input = document.querySelector("#veri").value;
var button = document.querySelector("#ekle");

ekle.addEventListener("click", function () {
  var li = document.createElement("li");
  console.log("input:" + input);
  li.textContent = veri.value;

  let li2 = document.createElement("li");
  li2.innerHTML = "Deneme elemanı";

  allList.appendChild(li2);

  console.log(li);

  console.log(input.Value);

  allList.appendChild(li);

  veri.value = "";
});

function getLetter(s) {
  let letter;
  // Write your code here
  let A = ["a", "e", "i", "o", "u"];
  let B = ["b", "c", "d", "f", "g"];
  let C = ["h", "j", "k", "l", "m"];
  let D = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  if (A.includes(s[0])) {
    letter = A;
  } else if (B.includes(s[0])) {
    letter = B;
  } else if (C.includes(s[0])) {
    letter = C;
  } else if (D.includes(s[0])) {
    letter = D;
  }
  return letter;
}
