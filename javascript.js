const zodiacSigns = [
  {
    name: "Aries",
    frontImg: "assets/imgs/aries.jpg",
    backImg: "assets/imgs/back/aries_blessing.jpg",
    msg: "You are courageous and bold – chase your dreams!",
  },
  {
    name: "Taurus",
    frontImg: "assets/imgs/taurus.jpg",
    backImg: "assets/imgs/back/taurus_blessing.jpg",
    msg: "Your patience and strength will lead to success.",
  },
  {
    name: "Gemini",
    frontImg: "assets/imgs/gemini.jpg",
    backImg: "assets/imgs/back/gemini_blessing.jpg",
    msg: "Your curiosity and wit light up the world.",
  },
  {
    name: "Cancer",
    frontImg: "assets/imgs/cancer.jpg",
    backImg: "assets/imgs/back/cancer_blessing.jpg",
    msg: "You are nurturing and strong – a true protector.",
  },
  {
    name: "Leo",
    frontImg: "assets/imgs/leo.jpg",
    backImg: "assets/imgs/back/leo_blessing.jpg",
    msg: "You shine like the sun – born to lead!",
  },
  {
    name: "Virgo",
    frontImg: "assets/imgs/virgo.jpg",
    backImg: "assets/imgs/back/virgo_blessing.jpg",
    msg: "Your attention to detail brings beauty to life.",
  },
  {
    name: "Libra",
    frontImg: "assets/imgs/libra.jpg",
    backImg: "assets/imgs/back/libra_blessing.jpg",
    msg: "You bring balance and peace wherever you go.",
  },
  {
    name: "Scorpio",
    frontImg: "assets/imgs/scorpio.jpg",
    backImg: "assets/imgs/back/scorpio_blessing.jpg",
    msg: "Passionate and powerful – nothing can stop you.",
  },
  {
    name: "Sagittarius",
    frontImg: "assets/imgs/sagittarius.jpg",
    backImg: "assets/imgs/back/sagittarius_blessing.jpg",
    msg: "Adventure is your middle name – keep exploring!",
  },
  {
    name: "Capricorn",
    frontImg: "assets/imgs/capricorn.jpg",
    backImg: "assets/imgs/back/capricorn_blessing.jpg",
    msg: "Your discipline and ambition will take you far.",
  },
  {
    name: "Aquarius",
    frontImg: "assets/imgs/aquarius.jpg",
    backImg: "assets/imgs/back/aquarius_blessing.jpg",
    msg: "Innovative and unique – your ideas change the world.",
  },
  {
    name: "Pisces",
    frontImg: "assets/imgs/pisces.jpg",
    backImg: "assets/imgs/back/pisces_blessing.jpg",
    msg: "Dreamy and empathetic – your heart leads the way.",
  },
];

function createCards() {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  zodiacSigns.forEach((zodiac, index) => {
    const card = document.createElement("div");
    card.className = "card-flip";
    card.innerHTML = `
      <div class="card-inner" data-index="${index}">
        <div class="card-front" style="background-image: url('${zodiac.frontImg}'); background-size: cover; background-position: center;">
          
        </div>
        <div class="card-back" style="background-image: url('${zodiac.backImg}'); background-size: cover; background-position: center;">
          <div class="overlay-text">${zodiac.msg}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".card-inner").forEach((card) => {
    card.addEventListener("click", () => {
      const parent = card.parentElement;
      parent.classList.toggle("flipped");
    });
  });
}

document
  .getElementById("zodiacGameModal")
  .addEventListener("shown.bs.modal", () => {
    createCards();
  });
