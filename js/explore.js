let cards = $('.trend__section .container');

cards.append(createCard(images[0], 'BlockChain', headers[0], text[0], 40, 'John Doe'))
cards.append(createCard(images[1], 'BlockChain', headers[1], text[1], 40, 'John Doe'))
cards.append(createCard(images[2], 'BlockChain', headers[2], text[2], 40, 'John DoD'))
cards.append(createCard(images[3], 'BlockChain', headers[3], text[3], 40, 'John Doe'))
cards.append(createCard(images[1], 'BlockChain', headers[4], text[4], 40, 'John Doe'))

let card = $('.card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        document.location = 'news.html?id=' + i
    })
}

function createCard(image, tag, header, text, userId, user) {
    const cardElement = createElement('div', 'card');
    const headerElement = createElement('div', 'card__header');
    const imageElement = createImage('card__image', image, 600);
    const bodyElement = createElement('div', 'card__body')
    const tagElement = createElementWithText('span', 'tag tag-red', tag);
    const h4Element = createElementWithText('h4', 'card__header__title', header);
    const pElement = createElementWithText('p', 'card__text', text);
    const footerElement = createElement('div', 'card__footer');
    const userElement = createElement('div', 'user');
    const userImageElement = createImage('user__image', 'https://i.pravatar.cc/40?img=' + userId, 40);
    const userInfoElement = createElement('div', 'user__info');
    const h5Element = createElementWithText('h5', '', user);
    headerElement.appendChild(imageElement);
    bodyElement.appendChild(tagElement);
    bodyElement.appendChild(h4Element);
    bodyElement.appendChild(pElement);
    userInfoElement.appendChild(h5Element);
    userElement.appendChild(userImageElement);
    userElement.appendChild(userInfoElement);
    footerElement.appendChild(userElement);
    cardElement.appendChild(headerElement);
    cardElement.appendChild(bodyElement);
    cardElement.appendChild(footerElement);
    return cardElement
}

function createElementWithText(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createImage(className, src, width) {
    const element = document.createElement('img');
    element.className = className;
    element.src = src;
    element.width = width;
    return element;
}