let username = "Oğuzhan";
const domain = "kodluyoruz.org";

let email = username + "@" + domain;
console.log("Merhaba", username, "sitemize hoşgeldin. Mail Adresin", email);

//Template literals ` ile kullanılır;

let email2 = `${username}@${domain}`;
console.log(`Merhaba ${username} sitemize hoşgeldin. Mail adresin :${email2}`);

const kitap = {
  ad: "Fırtına",

  yazar: "Shakespeare",

  tarih: 1610,
};

const bookTable =
  "<table border>" +
  "<tbody>" +
  "<tr>" +
  "<td>" +
  "Kitap" +
  "</td>" +
  "<td>" +
  kitap.ad +
  "</td>" +
  "</tr>" +
  "<tr>" +
  "<td>" +
  "Yazar" +
  "</td>" +
  "<td>" +
  kitap.yazar +
  "</td>" +
  "</tr>" +
  "<tr>" +
  "<td>" +
  "Tarih" +
  "</td>" +
  "<td>" +
  kitap.tarih +
  "</td>" +
  "</tr>" +
  " </tbody>" +
  "</table>";

const bookTableNew = `
  <table border>>
  <tr>
  <td>Kitap</td>
  <td>${kitap.ad}</td>
  </tr>
  <tr>
  <td>Tarih</td>
  <td>${kitap.tarih}</td>
  </tr>
  </tbody>
  </table>
  `;
