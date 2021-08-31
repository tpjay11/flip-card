import { CARD_TECHS } from "./const";

function shuffle(array) 
{
  const _array = array.slice(0);
  for(let i = 0; i < array.length -1 ; i++)
  {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array
}

function initializeDeck(level) {
    let id = 0;
    const cards_number = level * 2;
    const cards_list = CARD_TECHS.slice(0, cards_number);

    let cards = [];

    cards_list.forEach((name) => {
        cards.push({
            id: id++,
            name
          })
        cards.push({
            id: id++,
            name
        })
    })
    return shuffle(cards)

}

export default initializeDeck