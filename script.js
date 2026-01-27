const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");

const minionsVideo = document.getElementById("minionsVideo");
const fireworksBox = document.getElementById("fireworksBox");
const fireworksVideo = document.getElementById("fireworksVideo");

let scale = 1;

noBtn.addEventListener("click", () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;

  const messages = [
    "Are you sure? 😭",
    "Think again 👀",
    "Come onnn 💕",
    "Last chance 😭"
  ];

  question.textContent =
    messages[Math.floor(Math.random() * messages.length)];
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  question.style.display = "none";

  minionsVideo.classList.add("hidden");
  fireworksBox.classList.remove("hidden");

  fireworksVideo.currentTime = 0;
  fireworksVideo.play();
});
