const artistList = document.getElementById("artistList");
const grid = document.getElementById("albumGrid");
const lightbox = document.getElementById("lightbox");
const lbClose = document.getElementById("lbClose");
const albumCover = document.getElementById("albumCover");
const albumTitle = document.getElementById("albumTitle");
const albumMeta = document.getElementById("albumMeta");
const albumReview = document.getElementById("albumReview");

// square cover that reuses the photo grid .thumb style
function makeThumb(album) {
  const thumb = document.createElement("div");
  thumb.className = "thumb";
  const img = document.createElement("img");
  img.src = album.cover;
  img.alt = `${album.title} by ${album.artist}`;
  thumb.appendChild(img);
  return thumb;
}

// one big opinionated block per artist, with their covers underneath
function renderArtists(artists, albums) {
  artists.forEach((artist) => {
    const section = document.createElement("div");
    section.className = "artist-section";
    section.innerHTML = `
      <h3>${artist.name}</h3>
      <div class="artist-covers"></div>
      <div class="artist-intro">${artist.intro}</div>
      <hr class="artist-rule" />
    `;
    const row = section.querySelector(".artist-covers");
    albums
      .filter((album) => album.artist === artist.name)
      .forEach((album) => {
        const thumb = makeThumb(album);
        thumb.addEventListener("click", () => openAlbum(album));
        row.appendChild(thumb);
      });
    artistList.appendChild(section);
  });
}

// plain wall of every album, cover with title and artist underneath
function renderGrid(albums) {
  albums.forEach((album) => {
    const item = document.createElement("div");
    item.className = "album-item";
    item.appendChild(makeThumb(album));
    item.insertAdjacentHTML(
      "beforeend",
      `<p class="album-title">${album.title}</p>
       <p class="album-artist">${album.artist}</p>`,
    );
    item.addEventListener("click", () => openAlbum(album));
    grid.appendChild(item);
  });
}

function openAlbum(album) {
  albumCover.src = album.cover;
  albumCover.alt = `${album.title} by ${album.artist}`;
  albumTitle.textContent = album.title;
  albumMeta.textContent = `${album.artist}${album.year ? " \u2014 " + album.year : ""}`;
  albumReview.innerHTML = album.review;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAlbum() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

lbClose.addEventListener("click", closeAlbum);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeAlbum();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeAlbum();
});

fetch("/assets/data/music.json")
  .then((res) => res.json())
  .then((data) => {
    renderArtists(data.artists, data.albums);
    renderGrid(data.albums);
  });
