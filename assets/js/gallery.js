const postList = [
  /*
        ADD NEW FOLDERS HERE
        List images, first one listed will be cover
        Have "caption.txt" in the folder for a caption
    */
  {
    folder: "may-2026",
    images: [
      "flag.jpg",
      "podium.jpg",
      "picketline.jpg",
      "albany-selfie.jpg",
      "rep-meeting.jpg",
      "half-marathon-fundraiser.jpg",
      "piano-fundraiser.jpg",
      "back-to-the-city.jpg",
    ],
  },
  {
    folder: "march-2026",
    images: [
      "pih-notebook.jpg",
      "full-group.jpg",
      "selfie-with-john.jpg",
      "ny-and-john.jpg",
      "gillibrand-group-photo.jpg",
      "gillibrand-meeting.jpg",
      "nadler-group-photo.jpg",
      "schumer-group-photo.jpg",
    ],
  },

  // { folder: "staircase", images: ["staircase.jpg"] },
];

const BASE_PATH = "/assets/img/photos/";

const grid = document.getElementById("photoGrid");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
const lbCounter = document.getElementById("lbCounter");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbClose = document.getElementById("lbClose");

let currentPost = 0;
let currentImage = 0;
let currentCaption = "";

function imgSrc(post, filename) {
  return BASE_PATH + post.folder + "/" + filename;
}

function renderGrid() {
  postList.forEach((post, i) => {
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    thumb.innerHTML = `<img src="${imgSrc(post, post.images[0])}" alt="">`;
    if (post.images.length > 1) {
      thumb.innerHTML += `<span class="stack-badge"><span></span><span></span></span>`;
    }
    thumb.addEventListener("click", () => openLightbox(i));
    grid.appendChild(thumb);
  });
}

async function openLightbox(postIndex) {
  currentPost = postIndex;
  currentImage = 0;
  const post = postList[currentPost];

  // caption is fetched once per post open, and stays fixed while you
  // click through that post's photos
  currentCaption = "";
  try {
    const res = await fetch(BASE_PATH + post.folder + "/caption.html");
    currentCaption = res.ok ? (await res.text()).trim() : "";
  } catch (err) {
    currentCaption = "";
  }

  renderLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function renderLightbox() {
  const post = postList[currentPost];
  const filename = post.images[currentImage];
  lbImage.src = imgSrc(post, filename);
  lbImage.alt = currentCaption;
  lbCaption.innerHTML = currentCaption;
  if (post.images.length > 1) {
    lbCounter.textContent = `${currentImage + 1} / ${post.images.length}`;
    lbCounter.style.display = "block";
  } else {
    lbCounter.style.display = "none";
  }

  lbPrev.disabled = currentImage === 0;
  lbNext.disabled = currentImage === post.images.length - 1;
}

lbPrev.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    renderLightbox();
  }
});

lbNext.addEventListener("click", () => {
  const post = postList[currentPost];
  if (currentImage < post.images.length - 1) {
    currentImage++;
    renderLightbox();
  }
});

lbClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbPrev.click();
  if (e.key === "ArrowRight") lbNext.click();
});

renderGrid();
