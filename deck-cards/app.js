// Deck of Cards (app.js)

// #1 OK
function getCard() {
    axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(res => {
        let card = res.data.cards[0]; 
        // console.log(card) 
        console.log(`${card.value} of ${card.suit}`) 
    })
    .catch(err => console.log(err))
}
getCard() 

// #2 OK 
function getCards() {
    axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=2`)
    .then(res => {
        let card = res.data.cards[0];
        console.log(`${card.value} of ${card.suit}`) 
        axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then(res => {
            let card = res.data.cards[1];
            console.log(`${card.value} of ${card.suit}`)             
        })
    })
    .catch(err => console.log(err))
}
getCards() 

// #3 
const cardList = document.querySelector('.card-list')  
const button = document.getElementById('btn') 
const load = document.addEventListener('DOMContentLoaded', ready) 
let deckId = null; 
let url = 'http://deckofcardsapi.com/api/deck'

// DOMContentLoaded & Shuffle Deck 
function ready() {
    axios.get(`${url}/new/shuffle`)
    .then(res => {
        deckId = res.data.deck_id
        console.log(deckId)
    })
}

button.addEventListener('click', function() {
    axios.get(`${url}/${deckId}/draw/`)
    .then(res => {
        let card = res.data.cards[0]
        let cardLeft = res.data 
        if (cardLeft.remaining !== 0) {
            const newP = document.createElement('p');
            newP.innerText = `${card.value} of ${card.suit}`
            cardList.appendChild(newP) 
            console.log(cardLeft.remaining) 
        }
    })
    .catch(err => console.log(err)) 
})
