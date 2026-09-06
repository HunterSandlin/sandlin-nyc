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
  {
    folder: "may-2025",
    images: [
      "1_snow-in-charlotte.jpg",
      "2_snow-at-cafe.jpg",
      "3_outside-church-street.jpg",
      "4_grandas-chair.jpg",
      "5_trail-in-high-point.jpg",
      "6_hex-coffee-in-spring.jpg",
    ],
  },
  {
    folder: "december-2024",
    images: [
      "1_prague-trams.jpg",
      "2_kafka-museum.jpg",
      "3_crowd-in-prague.jpg",
      "4_downtown-prague.jpg",
      "5_prague-staircase.jpg",
      "6_off-the-charles-bridge.jpg",
      "7_blogna-cafe.jpg",
      "8_italian-home.jpg",
      "9_italian-street.jpg",
      "10_next-flight.jpg",
    ],
  },
  {
    folder: "july-2024",
    images: [
      "1_isgm.jpg",
      "2_boston-chinatown.jpg",
      "3_boston-backrooms.jpg",
      "4_looking-up.jpg",
      "5_lights-in-boston.jpg",
      "6_vaguely-jelly.jpg",
      "7_boston-aquarium.jpg",
      "8_boone-godrays.jpg",
      "9_mossy-cobble.jpg",
      "10_green.jpg",
    ],
  },
  {
    folder: "february-2024",
    images: [
      "1_stop-light.jpg",
      "2_damn-no-tag.jpg",
      "3_foggy-hills.jpg",
      "4_haze-on-8th.jpg",
      "5_cafe-light.jpg",
      "6_not-getting-any-greener.jpg",
      "7_blizzard-in-wv.jpg",
      "8_bridge-city.jpg",
      "9_walking-pittsburg.jpg",
      "10_downtown-pittsburg.jpg",
    ],
  },
  {
    folder: "october-2023",
    images: [
      "1_clt-cemetery-1.jpg",
      "2_clt-cemetery-2.jpg",
      "3_clt-cemetery-3.jpg",
      "4_clt-cemetery-4-crowell.jpg",
      "5_clt-cemetery-5.jpg",
      "6_clt-cemetery-6.jpg",
      "7_clt-cemetery-7.jpg",
      "8_clt-cemetery-8.jpg",
      "9_church-at-night.jpg",
      "10_halloween.jpg",
    ],
  },
  {
    folder: "september-2023",
    images: [
      "1_6th-and-pine.jpg",
      "2_cemetery-sunset.jpg",
      "3_charlotte-sunset.jpg",
      "4_chicago- tryzub.jpg",
      "5_glory-to-the-heros.jpg",
      "6_lansing-mi.jpg",
      "7_lansing-hotel.jpg",
      "8_lansing-root-top.jpg",
      "9_lansing-airport.jpg",
      "10_lansing-building.jpg",
      "11- tryzub-2.jpg",
    ],
  },
  {
    folder: "july-2023",
    images: [
      "1_rainy-charlotte-night.jpg",
      "2_later-than-you-think.jpg",
      "3_living-room-corner.jpg",
      "4_tiny-home.jpg",
      "5_lansing-backrooms.jpg",
      "6_rolling-hills.jpg",
      "7_mini-me.jpg",
      "8_sage.jpg",
      "9_heart.jpg",
    ],
  },
  {
    folder: "april-2023",
    images: [
      "1_uptown-charlotte.jpg",
      "2_blue-line.jpg",
      "3_green-skies.jpg",
      "4_charlotte-interchange.jpg",
      "5_new-charlotte-buidling.jpg",
      "6_asheville-reflection.jpg",
      "7_the-vue.jpg",
      "8_light-in-shade.jpg",
      "9_greensboro-gardens.jpg",
    ],
  },
  {
    folder: "september-2022",
    images: [
      "1_concord-fense.jpg",
      "2_southend.jpg",
      "3_camera-perched.jpg",
      "4_bug.jpg",
      "5_homer.jpg",
      "6_concord-mills.jpg",
      "7_hill-by-mill.jpg",
    ],
  },
  {
    folder: "europe-2022",
    images: [
      "1_gingerbread-houses.jpg",
      "2_amsterdam-street.jpg",
      "3_rotterdam-street.jpg",
      "4_rotterdam.jpg",
      "5_dutch-country-side.jpg",
      "6_paris.jpg",
      "7_tom-and-foolery.jpg",
      "8_back-home.jpg",
      "9_cat.jpg",
    ],
  },
  {
    folder: "december-2021",
    images: [
      "1_candle.jpg",
      "2_dj_chandy.jpg",
      "3_backlit-dj-chandy.jpg",
      "4_ape-show.jpg",
      "5-sage-and-opal.jpg",
    ],
  },
  {
    folder: "may-2021",
    images: [
      "1_bridge.jpg",
      "2_deedees-kitchen.jpg",
      "3_outside-dark-matter.jpg",
      "4_campus-sunset.jpg",
      "5_on-set.jpg",
      "6_kokomo.jpg",
      "7_l-enterance.jpg",
      "8_ cul-de-sac.jpg",
      "9_auna.jpg",
      "10_deedees-neighbor.jpg",
    ],
  },
  {
    folder: "april-2021",
    images: [
      "1_boa.jpg",
      "2_spring-street.jpg",
      "3_like-no-place-is-there.jpg",
      "4_link.jpg",
      "5_charlotte-trees.jpg",
      "6_backstage-high-school.jpg",
      "7_in-line.jpg",
      "8_church.jpg",
      "9-gatecity.jpg",
    ],
  },
  {
    folder: "march-2021",
    images: [
      "1_birdcage.jpg",
      "2_tree.jpg",
      "3_out-the-window.jpg",
      "4_posts.jpg",
      "5_learning.jpg",
      "6_kings-mill.jpg",
      "7_monster-outside.jpg",
      "8_lps.jpg",
      "9_better-days.jpg",
    ],
  },
  {
    folder: "january-2020",
    images: [
      "1_cards-and-cameras.jpg",
      "2_tricks.jpg",
      "3_flourishes.jpg",
      "4_everything-else.jpg",
      "5_photo-walk.jpg",
      "6_uptown-apartments.jpg",
      "7_photo-walk-by-train.jpg",
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
