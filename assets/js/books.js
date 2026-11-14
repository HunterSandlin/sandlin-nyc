const list = document.getElementById("bookList");
const lightbox = document.getElementById("lightbox");
const lbClose = document.getElementById("lbClose");
const bookTitle = document.getElementById("bookTitle");
const bookMeta = document.getElementById("bookMeta");
const bookReview = document.getElementById("bookReview");

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinal(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return n + "th";
  return n + (["th", "st", "nd", "rd"][n % 10] || "th");
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${ordinal(d)}, ${y}`;
}

function stars(rating) {
  const full = Math.round(rating);
  return "&#9733;".repeat(full) + "&#9734;".repeat(5 - full);
}

function previewText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function renderList(books) {
  books.forEach((book) => {
    const entry = document.createElement("div");
    entry.className = book.highlightedArticle
      ? "book-entry highlighted"
      : "book-entry";

    const details = [];
    if (book.rating) {
      details.push(`<span class="stars">${stars(book.rating)}</span>`);
    }
    if (book.dateRead) {
      details.push(`Read ${formatDate(book.dateRead)}`);
    }

    entry.innerHTML = `
      <h3>${book.title}</h3>
      <span class="author">&mdash; ${book.author}</span>
      ${details.length ? `<p class="details">${details.join(" &middot; ")}</p>` : ""}
      <p class="preview">${previewText(book.review)}</p>
    `;
    entry.addEventListener("click", () => openBook(book));
    list.appendChild(entry);
  });
}

function openBook(book) {
  bookTitle.textContent = book.title;
  bookMeta.textContent = `${book.author}${book.dateRead ? " \u2014 read " + formatDate(book.dateRead) : ""}`;
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
  .then(renderList);
