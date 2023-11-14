async function getData(currency) {
    const url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;
    let result = await fetch(url)
        .then(res => res.json())
        .then(res => res["data"]['rates']);
    return [result['USD'].substring(0, 10), result['RUB'].substring(0,10)];
}

// <div class="card">
//                 <img class="coin-graph" src="https://www.coingecko.com/coins/1/sparkline.svg">
//                 <div class="coin">
//                     <img class="coin-icon"
//                          src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400">
//                     <h3>Bitcoin</h3>
//                 </div>
//                 <h4>Цена в USD</h4>
//                 <p class="coin-price">$34,988.63</p>
//                 <h4>Цена в RUB</h4>
//                 <p class="coin-price">$683,362,885,615</p>
//             </div>
function createCoinCard(currency, usd, rub, image, graphId) {
    const cardElement = createElement('div', 'card');
    const graphElement = createImage('coin-graph', 'https://www.coingecko.com/coins/' + graphId + '/sparkline.svg', 100);
    const coinElement = createElement('div', 'coin');
    const iconElement = createImage('coin-icon', image, 50);
    const currencyElement = createElementWithText('h3', 'card__header__title', currency);
    const USDElement = createElementWithText('h4', 'price__header', "Цена в USD");
    const USDPriceElement = createElementWithText('p', 'coin-price', "$" + usd);
    const RUBElement = createElementWithText('h4', 'price__header', "Цена в RUB");
    const RUBPriceElement = createElementWithText('p', 'coin-price', "P" + rub);
    coinElement.appendChild(iconElement);
    coinElement.appendChild(currencyElement);
    cardElement.appendChild(graphElement);
    cardElement.appendChild(coinElement);
    cardElement.appendChild(USDElement);
    cardElement.appendChild(USDPriceElement);
    cardElement.appendChild(RUBElement);
    cardElement.appendChild(RUBPriceElement);
    return cardElement;
}

