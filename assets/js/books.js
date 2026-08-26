const grid = document.getElementById("bookGrid");
const lightbox = document.getElementById("lightbox");
const lbClose = document.getElementById("lbClose");
const bookTitle = document.getElementById("bookTitle");
const bookMeta = document.getElementById("bookMeta");
const bookReview = document.getElementById("bookReview");

function stars(rating) {
  if (!rating) return "";
  const full = Math.round(rating);
  return "&#9733;".repeat(full) + "&#9734;".repeat(5 - full);
}

function previewText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function renderGrid(books) {
  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="stars">${stars(book.rating)}</p>
      <p class="preview">${previewText(book.review)}</p>
    `;
    card.addEventListener("click", () => openBook(book));
    grid.appendChild(card);
  });
}

function openBook(book) {
  bookTitle.textContent = book.title;
  bookMeta.textContent = `${book.author}${book.dateRead ? " \u2014 read " + book.dateRead : ""}`;
  bookReview.innerHTML = book.review;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBook() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

lbClose.addEventListener("click", closeBook);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeBook();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeBook();
});

fetch("/assets/data/books.json")
  .then((res) => res.json())
  .then(renderGrid);
