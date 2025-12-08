// buat loader atas
let section = document.querySelector("section");

setTimeout(() => {
  section.classList.add("fade-in");
}, 400);

const links = document.querySelectorAll("a.nav-item");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const url = link.getAttribute("href");

    if (url && url !== "#") {
      e.preventDefault();
      loader();

      section.classList.remove("fade-in");
      section.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 400);
    }
  });
});

function loader() {
  const loader = document.getElementById("page-loader");
  loader.style.width = "100%";
}

// audio
const speakerOn = `
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.4188 3.12946C12.0806 2.6567 13 3.12982 13 3.94319V20.0568C13 20.8702 12.0806 21.3433 11.4188 20.8705L6 17H3C1.89543 17 1 16.1046 1 15V9C1 7.89543 1.89543 7 3 7H6L11.4188 3.12946Z" fill="white"/>
  <path d="M15.9938 16.9053C17.2347 15.6423 18 13.9105 18 12C18 10.0815 17.2282 8.34323 15.9781 7.0788" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.7782 4.2218C20.7688 6.21241 22 8.96241 22 12C22 15.0375 20.7688 17.7875 18.7782 19.7782" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const speakerOff = `
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.94319C17 3.12982 16.0806 2.6567 15.4188 3.12946L10 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H7.22832L17 9.39981V3.94319ZM17 11.9335L10.2533 17.1809L15.4188 20.8705C16.0806 21.3433 17 20.8702 17 20.0568V11.9335Z" fill="white"/>
  <path d="M21 5L3 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("audio-toggle");
const icon = document.getElementById("audio-icon");

icon.innerHTML = speakerOff;

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.innerHTML = speakerOn;
  } else {
    audio.pause();
    icon.innerHTML = speakerOff;
  }
});
