//  letters
const letters = 'abcdefghijklmnopqrstuvwxyz'
//make letters Array
let lettersArray = Array.from(letters)

let letterContainer = document.querySelector('.letters')
lettersArray.forEach((letter) => {
  //create span
  let span = document.createElement('span')

  //create textNode to letters
  let theLetter = document.createTextNode(letter)

  //append theLetters To span
  span.appendChild(theLetter)

  //append span to letterContainer
  letterContainer.appendChild(span)

  //add class
  span.className = 'letter-box'
})
// words && category
let words = {
  programming: [
    'PHP',
    'javascript',
    'java',
    'C',
    'HTML',
    'CSS',
    'Mysql',
    'Python',
  ],
  Football_Team: [
    'Ahly',
    'RealMadrid',
    'Bayern',
    'Paris',
    'Barcelona',
    'Liverpool',
    'ManCity',
    'Milan',
  ],
  people: [
    'Ahmed',
    'Mahmoud',
    'Andrew',
    'Mohammed',
    'Leo',
    'Salma',
    'Atia',
    'Ali',
  ],
  Players: [
    'Ronaldo',
    'Messi',
    'MoSalah',
    'Alisson',
    'Kante',
    'Mane',
    'Pogba',
    'Neymar',
  ],
  countries: ['Syria', 'Palestine', 'Russi', 'Egypt', 'Japan', 'Qatar'],
}

// Operations To Get Random Word (Keys)
let allKeys = Object.keys(words)
let randomPropNumber = Math.floor(Math.random() * allKeys.length)
let randomPropName = allKeys[randomPropNumber]
let randomPropValue = words[randomPropName]
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)
let randonValueValue = randomPropValue[randomValueNumber]
//Set Category Info
document.querySelector('.game-info .category span').innerHTML = randomPropName

const lettersGuessContainer = document.querySelector('.letters-guess')

let letterAndSpace = Array.from(randonValueValue)
letterAndSpace.forEach((letter) => {
  let guessSpan = document.createElement('span')

  if (letter === ' ') {
    guessSpan.className = 'has-space'
  }

  lettersGuessContainer.appendChild(guessSpan)
})
let letterSpan = document.querySelector('.letter-box')
//lettersGuessContainer to Arrary
let guessArray = document.querySelectorAll('.letters-guess span')

//Wrong Choose
let wrongChoose = 0

//get draw
let theDraw = document.querySelector('.hangman-draw')

letterContainer.addEventListener('click', (e) => {
  // Set The Choose Status
  let theStatus = false
  let success= 0;
  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked')
    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase()
    let theChosenWord = Array.from(randonValueValue.toLowerCase())
    theChosenWord.forEach((wordLetter, indexLetter) => {
      if (theClickedLetter === wordLetter) {
        theStatus = true
        success++;
        console.log(success);
        //Loop On All guess Spans
        guessArray.forEach((guessLetter, guessIndex) => {
          if (indexLetter == guessIndex) {
            guessLetter.innerHTML = theClickedLetter
          }
        })
      }
    })

    if (41 !== true) {
      wrongChoose++
      theDraw.classList.add(`wrong-${wrongChoose}`)
    } else if (wrongChoose === 8) {
      failedGame()
      letterContainer.classList.add('end')
    }
  }
})
function failedGame() {
  swal.fire({
    // icon: 'error',
    title: ` Oops...,The Word Is ${randonValueValue}`,
    text: 'You Failed Try again!',
    imageUrl: 'image/thumbsdown.jpg',
  })
}
//-------------------------------
function successGame() {
  let gue = document.querySelector('.letters-guess');
  gue = gue.innerText
  console.log(gue.split())
  
}
console.log(randonValueValue)
