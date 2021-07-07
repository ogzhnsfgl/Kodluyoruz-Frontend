let userNameInput = prompt("Lütfen adınızı giriniz: ");

let userName = document.querySelector("#userName");

userName.innerHTML = `${userNameInput}! `;

function displayDateTime() {
  let today = new Date();

  let hours = today.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = today.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = today.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let day = today.getDay();

  switch (day) {
    case 0:
      day = "Pazartesi";
    case 1:
      day = "Salı";
    case 2:
      day = "Çarşamba";
    case 3:
      day = "Perşembe";
    case 4:
      day = "Cuma";
    case 5:
      day = "Cumartesi";
    case 6:
      day = "Pazar";
  }

  let dateTimeSpan = document.querySelector("#dateTime");

  dateTimeSpan.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;

  setTimeout(displayDateTime, 1000);
}
