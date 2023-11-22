const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
$('.article-title').text(headers[id]);
$('.article-image')[0].src = images[id];