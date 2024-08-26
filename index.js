document.addEventListener("DOMContentLoaded", () => {
  // Fungsi untuk memeriksa nama di sessionStorage
  const checkUserName = () => {
    const userName = sessionStorage.getItem("name");
    if (!userName) {
      // Jika nama tidak ada di sessionStorage, alihkan pengguna ke daftar.html
      window.location.href = "daftar.html";
    }
  };

  // Panggil fungsi untuk memeriksa nama saat halaman dimuat
  checkUserName();
})


function komputer() {
  let emoji = ['🖐️', '✌️', '✊']
  let musuh = emoji[Math.floor(Math.random() * emoji.length)];
  const getEmoji = document.querySelectorAll(".emoji-km p");
  getEmoji.forEach(value => {
    if(value.textContent === musuh){
      value.classList.add("emoji-km-selected")
    } else {
      value.classList.remove("emoji-km-selected")
    }
  })
  return musuh;
}

function resultMatch(emoji) {
  const resultKomp = komputer();
  let resultUser = emoji;

  let result;
  if (resultUser === "🖐️") {
    if (resultKomp === "✊") {
      result = "Yey Menang 😎";
    } else if (resultKomp === "✌️") {
      result = "Yah kamu kalah 🤧";
    } else {
      result = "SERI!!! 😱";
    }
  } else if (resultUser === "✌️") {
    if (resultKomp === "🖐️") {
      result = "Yey Menang 😎";
    } else if (resultKomp === "✊") {
      result = "Yah kamu kalah 🤧";
    } else {
      result = "SERI!!! 😱";
    }
  } else {
    if (resultKomp === "✌️") {
      result = "Yey Menang 😎";
    } else if (resultKomp === "🖐️") {
      result = "Yah kamu kalah 🤧";
    } else {
      result = "SERI!!! 😱";
    }
  }

  const getResult = document.querySelector(".main");
  const getEmoji = document.querySelectorAll(".add-result")
  getResult.removeAttribute("hidden")

  const emojiResultOne = getEmoji[0]
  const emojiResultTwo = getEmoji[1]
  emojiResultOne.textContent = `${resultUser}`
  emojiResultTwo.textContent = `${resultKomp}`

  const winner = document.querySelector(".winner")
  winner.textContent = result 

  const getVs = document.querySelector(".vs-tump")
  if(getVs){
    getVs.remove()
  } 
}

document.addEventListener("DOMContentLoaded", () => {
  const getNameUser = () => {
    const getNameSession = sessionStorage.getItem("name");
    const getName = document.querySelector(".title-user h2");
    const getNameResult = document.querySelectorAll(".emoji-result h4")[0];
    getNameResult.textContent = getNameSession || "Lu Siapa 🫢";
    getName.textContent = getNameSession || "Lu Siapa 🫢"; 
  };

  getNameUser(); // Panggil fungsi setelah halaman dimuat
});
