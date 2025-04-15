const zodiacSigns = [
  {
    name: "Aries",
    frontImg: "assets/imgs/aries.jpg",
    backImg: "assets/imgs/style-bohemian.jpg",
    msg: "Bohemian",
  },
  {
    name: "Taurus",
    frontImg: "assets/imgs/taurus.jpg",
    backImg: "assets/imgs/style-coastal.jpg",
    msg: "Coastal",
  },
  {
    name: "Gemini",
    frontImg: "assets/imgs/gemini.jpg",
    backImg: "assets/imgs/style-contemporary.jpg",
    msg: "Contemporary",
  },
  {
    name: "Cancer",
    frontImg: "assets/imgs/cancer.jpg",
    backImg: "assets/imgs/style-eclectic.jpg",
    msg: "Eclectic",
  },
  {
    name: "Leo",
    frontImg: "assets/imgs/leo.jpg",
    backImg: "assets/imgs/style-industrial.jpg",
    msg: "Industrial",
  },
  {
    name: "Virgo",
    frontImg: "assets/imgs/virgo.jpg",
    backImg: "assets/imgs/style-japandi.jpg",
    msg: "Japndi",
  },
  {
    name: "Libra",
    frontImg: "assets/imgs/libra.jpg",
    backImg: "assets/imgs/style-minimalist.jpg",
    msg: "Minimalist",
  },
  {
    name: "Scorpio",
    frontImg: "assets/imgs/scorpio.jpg",
    backImg: "assets/imgs/style-modern.jpg",
    msg: "Modern",
  },
  {
    name: "Sagittarius",
    frontImg: "assets/imgs/sagittarius.jpg",
    backImg: "assets/imgs/style-rustic.jpg",
    msg: "Rustic",
  },
  {
    name: "Capricorn",
    frontImg: "assets/imgs/capricorn.jpg",
    backImg: "assets/imgs/style-scandinavian.jpg",
    msg: "Scandinavian",
  },
  {
    name: "Aquarius",
    frontImg: "assets/imgs/aquarius.jpg",
    backImg: "assets/imgs/style-shabby.jpg",
    msg: "Shabby",
  },
  {
    name: "Pisces",
    frontImg: "assets/imgs/pisces.jpg",
    backImg: "assets/imgs/style-traditional.jpg",
    msg: "Traditional",
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
