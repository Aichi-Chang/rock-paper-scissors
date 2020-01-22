function game() {

  const aTag = document.querySelectorAll('a')
  const chose1 = document.querySelector('.chose1')
  const chose2 = document.querySelector('.chose2')
  const player2 = ['ROCK', 'PAPER', 'SCISSORS']
  const outputTag = document.querySelector('.output')
  const resetTag = document.querySelector('.reset')
  const cursor = document.querySelector('div.cursor')

  let compare = []

  // when user click rock, paper, or scissors, 
  // show what've been clikced at player1
  aTag.forEach((button) => {
    button.addEventListener('click', (event) => {
      const elem = event.target
      chose1.innerHTML = `${elem.classList}`
      console.log(`${elem.classList}`)
      
      compare.push(`${elem.classList}`)

      computer()

      fight()

      compare = []

    })
  })

  // when user click, computer also chose one,
  // and show it at player2
  const computer = function () {
    const random = Math.floor(Math.random() * 3)
    chose2.innerHTML = player2[random]
    console.log(player2[random])

    compare.push(player2[random])
  }


  // rock > scissors > paper > rock
  // show result at the outputTag
  const fight = function () {
    if (compare[0] === compare[1]) {
      outputTag.innerHTML = 'Was a Tie'
      console.log('Was a Tie')
    } else {
      if (compare[0] === 'ROCK') {
        if (compare[1] === 'SCISSORS') {
          outputTag.innerHTML = 'ROCK wins!'
          console.log('ROCK wins!')
        } else {
          outputTag.innerHTML = 'PAPER wins!'
          console.log('PAPER wins!')
        }
      }
      if (compare[0] === 'SCISSORS') {
        if (compare[1] === 'PAPER') {
          outputTag.innerHTML = 'SCISSORS wins!'
          console.log('SCISSORS wins!')
        } else {
          outputTag.innerHTML = 'ROCK wins!'
          console.log('ROCK wins!')
        }
      }
      if (compare[0] === 'PAPER') {
        if (compare [1] === 'ROCK') {
          outputTag.innerHTML = 'PAPER wins!'
          console.log('PAPER wins')
        } else {
          outputTag.innerHTML = 'SCISSORS wins!'
          console.log('SCISSORS wins!')
        }
      }
    }
  }

  // when user click reset, the game will reset to the start
  resetTag.addEventListener('click', () => {
    compare = []
    chose1.innerHTML = ''
    chose2.innerHTML = ''
    outputTag.innerHTML = ''
    console.clear()
  })

  // make cursor a blue ball
  
  const moveCursor = function (x, y) {
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
  }

  document.addEventListener('mousemove', (event) => {
    moveCursor(event.pageX, event.pageY)
  })

}

window.addEventListener('DOMContentLoaded', game)