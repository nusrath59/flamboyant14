const toggle = document.getElementById("darkToggle");
toggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
});

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}
const search = document.getElementById("searchInput");
const filter = document.getElementById("batchFilter");
const cards = document.querySelectorAll(".alumni-card");

function applyFilters() {
  const s = search.value.toLowerCase();
  const b = filter.value;

  cards.forEach(c => {
    const match =
      (c.dataset.name.includes(s) || c.dataset.company.includes(s)) &&
      (b === "" || c.dataset.batch === b);

    c.style.display = match ? "block" : "none";
  });
}

search?.addEventListener("input", applyFilters);
filter?.addEventListener("change", applyFilters);
