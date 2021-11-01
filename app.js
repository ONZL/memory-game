document.addEventListener('DOMContentLoaded',() => {

  //card options
  const cardArray= [
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },{
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },{
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },{
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    },{
      name:'pizza',
      img:'images/pizza.png'
    },
  ]

  for (let i = cardArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = cardArray[i]
    cardArray[i] = cardArray[j]
    cardArray[j] = k
  

  const grid= document.querySelector('.grid')
  const resultDisplay= document.querySelector('#result')

  let cardschosen=[];
  let cardschosenid=[];
  let cardsWon= [];
  
//Create your board
  function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
      const card =document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click',flipcard)
      grid.appendChild(card)
      console.log(card.dataset)
    } 
  }
  
//Check for Matches
const showMessage = document.getElementById('show-message')

  function checkForMatch(){
    let cards= document.querySelectorAll('img')
    const optionOneId=cardschosenid[0]
    const optionTwoId=cardschosenid[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      showMessage.innerText = 'You have clicked the same image!'
      setTimeout(() => showMessage.innerText = '', 1000)
    }
    else if (cardschosen[0] === cardschosen[1]) {
      showMessage.innerText = 'You found a match'
      setTimeout(() => showMessage.innerText = '', 1000)
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipcard)
      cards[optionTwoId].removeEventListener('click', flipcard)
      cardsWon.push(cardschosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      showMessage.innerText = 'Sorry, try again'
      setTimeout(() => showMessage.innerText = '', 1000)
    }

    cardschosen=[];
    cardschosenid= [];
    resultDisplay.textContent= cardsWon.length 
    if(cardsWon.length===cardArray.length/2){resultDisplay.textContent='Congratulation! You found them all!'}
  }

// Flip card
  function flipcard(){
    if (cardsChosen.length < 2) {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  }
  createBoard()
})