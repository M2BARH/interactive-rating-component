
const urlParams = new URLSearchParams(window.location.search);
const rating = urlParams.get('rating');

document.getElementById('rating').textContent = rating;