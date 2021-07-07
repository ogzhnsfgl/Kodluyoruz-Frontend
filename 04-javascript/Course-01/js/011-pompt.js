let fullName = prompt("Kullanıcı adınızı giriniz: ");

let title = document.querySelector("#title");

title.innerHTML = `${title.innerHTML} <small style="color:blue">${fullName}</small>`;
