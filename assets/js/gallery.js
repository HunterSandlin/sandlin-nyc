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
      "ny-selfie.jpg",
    ],
  },
  {
    folder: "february-2026",
    images: [
      "1_new-years-tv.jpg",
      "2_plane-window.jpg",
      "3_lone-tree.jpg",
      "4_show-is-over.jpg",
      "5_fall-on-10th.jpg",
      "6_shaowed-homes.jpg",
      "7_union-square-twins.jpg",
      "8_broadway-storefront.jpg",
      "9_empty-train.jpg",
      "10_snow-on-second.jpg",
      "11_snow-on-81st.jpg",
    ],
  },
  {
    folder: "october-2025",
    images: [
      "1_nyc-fire-escape.jpg",
      "2_stoplight.jpg",
      "3_jersey-city.jpg",
      "4_brownstones.jpg",
      "5_central-park-stairs.jpg",
      "6_highline.jpg",
      "7_central-park-towers.jpg",
      "8_billionaires-row.jpg",
      "9_dark-street.jpg",
      "10_little-italy.jpg",
    ],
  },
  {
    folder: "august-2025",
    images: [
      "1_grass-and-sky.jpg",
      "2_green-trees.jpg",
      "3_mountains-through-trees.jpg",
      "4_bokoblin-stronghold.jpg",
      "5_water-by-window.jpg",
      "6_okc-canal.jpg",
      "7_wires.jpg",
      "8_building-light.jpg",
      "9_bright-sidewalk.jpg",
      "10_stoplights-in-sky.jpg",
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
