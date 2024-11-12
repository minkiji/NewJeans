let isScrolling = false;

document.addEventListener('wheel', function(event) {
  if (isScrolling) return;

  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = Array.from(sections).findIndex(section =>
    section.getBoundingClientRect().top === 0
  );

  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    isScrolling = true;
    sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    isScrolling = true;
    sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
  }

  // Allow scrolling again after a delay
  setTimeout(() => {
    isScrolling = false;
  }, 750);
});



// Data for each profile
const profiles = [
  {
    intro: "as",
    idol: "Minji",
    name: "Kim Minji",
    description: "Kim Min-ji, known mononymously as Minji, is a South Korean singer. Minji made her debut as a member of the South Korean girl group NewJeans, under the record label ADOR on July 22, 2022.",
    image: "src/img/minji.png"
  },
  {
    intro: "as",
    idol: "Hanni",
    name: "Pham Ngoc Han",
    description: "Phạm Ngọc Hân, known professionally as Hanni, is an Australian singer based in South Korea. In July 2022, she made her debut as a member of the South Korean girl group NewJeans, under the record label ADOR.",
    image: "src/img/hanni.png"
  },
  {
    intro: "as",
    idol: "Danielle",
    name: "Danielle June Marsh",
    description: "Danielle June Marsh, known mononymously as Danielle, is an Australian and South Korean singer. She began her career in the entertainment industry by making several appearances on television as a child, before debuting as a member of South Korean girl group NewJeans in 2022.",
    image: "src/img/danielle.png"
  },
  {
    intro: "as",
    idol: "Haerin",
    name: "Kang Haerin",
    description: "Kang Hae-rin, known mononymously as Haerin, is a South Korean singer. She is best known as a member of the South Korean girl group NewJeans, which debuted on July 22, 2022, under the record label ADOR.",
    image: "src/img/haerin.png"
  },
  {
    intro: "as",
    idol: "Hyein",
    name: "Lee Hyein",
    description: "Lee Hye-in, known mononymously as Hyein, is a South Korean singer and former child model. She began her musical career at nine years old as a member of the South Korean children's groups U.sso Girl and Play with Me Club. She later debuted as a member of South Korean girl group NewJeans, formed by ADOR in July 2022.",
    image: "src/img/hyein.png"
  }
];

// Function to change profile based on the selected index
function changeProfile(index) {
  const profile = profiles[index];

  document.getElementById("intro").textContent = profile.intro;
  document.getElementById("idol").textContent = profile.idol;
  document.getElementById("name").textContent = profile.name;
  document.getElementById("description").textContent = profile.description;
  document.getElementById("background").style.backgroundImage = `url(${profile.image})`;

  const profileItems = document.querySelectorAll(".profile-menu ul li");

  profileItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Set the default profile when the page loads
window.onload = function() {
  changeProfile(0);
};



const videos = [
  "https://www.youtube.com/embed/ir6ndUQ2pS4?si=3-GJlalowO_YT76R",
  "https://www.youtube.com/embed/bk50RC7XGlc?si=eYxn7PdrxoBHwCtm",
  "https://www.youtube.com/embed/tgrPTT7leyw?si=OL499BIIj02YLz19",
  "https://www.youtube.com/embed/pF7oJfQjaBs?si=ww0g_K5wI2e35YTJ",
  "https://www.youtube.com/embed/gi79JJNptwY?si=y2FKmm3bOn_emRJ4",
  "https://www.youtube.com/embed/8KT2buwnNtY?si=znTe9pL1RD5b0ncF",
  "https://www.youtube.com/embed/JrSVBnMlcSs?si=USNHIyMFX-727VQB",
  "https://www.youtube.com/embed/2rE4uldOSrw?si=pPmv0Y2QEG1fcd0P",
  "https://www.youtube.com/embed/XVwbkHoqkIA?si=ufc-0QowUSViQsHQ",
  "https://www.youtube.com/embed/N1yypxDSxpY?si=O8AwjA_CtYc4UH4X",
  "https://www.youtube.com/embed/r40gM0BPVys?si=vu2I2CtBmRpLw6ad",
  "https://www.youtube.com/embed/958bjfKWAD4?si=96wZ6MvnMDSt5h1G",
  "https://www.youtube.com/embed/ptnDZPZliPo?si=PAh38rjRUpDML7S0",
  "https://www.youtube.com/embed/ViGYz2uem3Q?si=hzJZ4li3o6mbxtkI",
  "https://www.youtube.com/embed/E1Fgm3kmywM?si=dcMKFtQ-5SIkBhxC",
  "https://www.youtube.com/embed/B2MwERJTFLQ?si=aAZXoErADKhwPbnm",
  "https://www.youtube.com/embed/BxeFmWY8Rps?si=3IP5JEa9h6MI5erA",
  "https://www.youtube.com/embed/HHXGpHqC0DM?si=jTJ1PrTZDH6npdGr"
];

let currentVideoIndex = 0; // Start at the first video

// Function to change video
function changeVideo(direction) {
  currentVideoIndex += direction;
  if (currentVideoIndex < 0) currentVideoIndex = videos.length - 1;
  if (currentVideoIndex >= videos.length) currentVideoIndex = 0;

  const videoContainer = document.querySelector('.video-container');
  videoContainer.innerHTML = `<iframe class="video" width="1080" height="607" src="${videos[currentVideoIndex]}"
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
