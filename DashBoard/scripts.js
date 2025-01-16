document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navigation a");
  const mainContent = document.querySelector(".main");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("href");

      fetch(page)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const newContent = doc.querySelector(".main").innerHTML;
          mainContent.innerHTML = newContent;
          window.history.pushState({ path: page }, "", page);
        })
        .catch(error => console.error("Error loading page:", error));
    });
  });

  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.path) {
      fetch(e.state.path)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const newContent = doc.querySelector(".main").innerHTML;
          mainContent.innerHTML = newContent;
        })
        .catch(error => console.error("Error loading page:", error));
    }
  });
});

function updateStock(productName, change) {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells[0].innerText === productName) {
      let stock = parseInt(cells[3].innerText);
      stock += change;
      cells[3].innerText = stock;
      cells[4].innerHTML = stock > 0 ? '<span class="status delivered">Available</span>' : '<span class="status pending">Out of Stock</span>';
    }
  });
}
