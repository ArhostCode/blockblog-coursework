images = [
    'img/assets/im1.png',
    'img/assets/im2.png',
    'img/assets/im3.jpg',
    'img/assets/im4.jpg'
]

headers = [
    'Demystifying Blockchain: A Beginner\'s Guide',
    'Blockchain in Supply Chain Management: Revolutionizing Logistics',
    'The Role of Blockchain in Financial Services: Beyond Bitcoin',
    'Blockchain and Healthcare: A Prescription for Data Security',
    'The Environmental Impact of Blockchain: Greening the Digital Ledger'
]

text = [
    'В этой статье мы рассмотрим основы технологии блокчейн и как она работает, предоставляя читателям понятное введение в мир децентрализации и безопасности данных.',
    'Узнайте, как блокчейн-технология трансформирует управление цепочкой поставок, обеспечивая прозрачность, отслеживаемость и эффективность в мире логистики.',
    'В этой статье рассматриваются разнообразные применения блокчейн в финансовой сфере, от цифровых валют до смарт-контрактов, и как они меняют финансовую индустрию.',
    'Ознакомьтесь с тем, как технология блокчейн может усилить безопасность и целостность медицинских данных, а также улучшить обмен информацией в системе здравоохранения.',
    'Эта статья рассматривает вопросы экологической устойчивости блокчейн-технологии и способы снижения ее энергопотребления для защиты окружающей среды.'
]

let cards = $('.trend__section .container');

cards.append(createCard(images[0], 'BlockChain', headers[0], text[0]))
cards.append(createCard(images[1], 'BlockChain', headers[1], text[1]))
cards.append(createCard(images[2], 'BlockChain', headers[2], text[2]))
cards.append(createCard(images[3], 'BlockChain', headers[3], text[3]))
cards.append(createCard(images[1], 'BlockChain', headers[4], text[4]))

let card = $('.card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        document.location = 'news.html'
    })
}

function createCard(image, tag, header, text) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const headerElement = document.createElement('div');
    headerElement.className = 'card__header';
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = 'card__image';
    imageElement.className = 'card__image';
    imageElement.width = '600';
    const bodyElement = document.createElement('div');
    bodyElement.className = 'card__body';
    const tagElement = document.createElement('span');
    tagElement.className = 'tag tag-red';
    tagElement.textContent = tag;
    const h4Element = document.createElement('h4');
    h4Element.textContent = header;
    const pElement = document.createElement('p');
    pElement.textContent = text;
    const footerElement = document.createElement('div');
    footerElement.className = 'card__footer';
    const userElement = document.createElement('div');
    userElement.className = 'user';
    const userImageElement = document.createElement('img');
    userImageElement.src = 'https://i.pravatar.cc/40?img=3';
    userImageElement.alt = 'user__image';
    userImageElement.className = 'user__image';
    const userInfoElement = document.createElement('div');
    userInfoElement.className = 'user__info';
    const h5Element = document.createElement('h5');
    h5Element.textContent = 'John Doe';
    const smallElement = document.createElement('small');
    smallElement.textContent = '2d ago';
    headerElement.appendChild(imageElement);
    bodyElement.appendChild(tagElement);
    bodyElement.appendChild(h4Element);
    bodyElement.appendChild(pElement);
    userInfoElement.appendChild(h5Element);
    userInfoElement.appendChild(smallElement);
    userElement.appendChild(userImageElement);
    userElement.appendChild(userInfoElement);
    footerElement.appendChild(userElement);
    cardElement.appendChild(headerElement);
    cardElement.appendChild(bodyElement);
    cardElement.appendChild(footerElement);
    return cardElement
}