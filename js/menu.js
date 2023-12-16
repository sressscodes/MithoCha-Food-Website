const searchInput = document.getElementById('search-food');
const searchButton = document.getElementById('search-button');
const gallery = document.getElementById('gallery');

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const productElements = gallery.querySelectorAll('.productlist');

  productElements.forEach(function (productElement) {
    const productTitle = productElement.querySelector('h3').textContent.toLowerCase();
    if (productTitle.includes(searchTerm)) {
      productElement.style.display = 'block';
    } else {
      productElement.style.display = 'none';
    }
  });
}

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);
