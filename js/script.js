/*----- constants -----*/
const PLAYERS = {
    '1': 'X',
    '-1': 'O'
  }
  
  const winningCombos = [
    // Horizontal 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  /*----- state variables -----*/
  let board
  let turn
  let winner
  let tie
  
  /*----- cached elements  -----*/
  const playAgainBtn = document.getElementById('restart')
  const boardEl = document.getElementById('board')
  const msgEl = document.getElementById('message')
  
  /*----- event listeners -----*/
  playAgainBtn.addEventListener('click', restartGame)
  boardEl.addEventListener('click', handleClick)
  
  /*----- functions -----*/
  init()
  
  function init() {
    turn = 1   // X's turn first
    board = [null, null, null, null, null, null, null, null, null]
    winner = null
    tie = false
    playAgainBtn.style.visibility = 'hidden';
    render()
  }
  
  function render() {
    renderBoard()
    renderMsg()
    renderCtrls()
  }
  
  function restartGame() {
    init()
  }
  
  function handleClick(evt) {
    if (winner) return
    console.log(board)
    if (evt.target.id !== 'board') {
      const tIdx = evt.target.id[1]
      if (!board[tIdx]) {
        board[tIdx] = turn
        checkWin()
        changeTurn()
        render()
      }
    }
  }
  
  function renderBoard() {
    board.forEach(function(tile, idx) {
      if (tile) {
        document.getElementById(`t${idx}`).textContent = PLAYERS[tile]
      } else {
        document.getElementById(`t${idx}`).textContent = ''
      }
    })
  }
  
  function renderCtrls() {
    if ((winner !== null) || (tie === true)) {
     playAgainBtn.style.visibility = 'visible';
    }
  }
  
  function renderMsg() {
    if (!board.includes(null)) {
      tie = true
    }
    if (winner) {
      msgEl.innerText = `${PLAYERS[winner]} Wins!`
    } else if (!winner && tie) {
      msgEl.innerText = 'It\'s a tie!'
    } else {
      msgEl.innerText = `${PLAYERS[turn]}'s Turn`
    }
  }
  
  function checkWin() {
    for (let combo of winningCombos) {        // for each combo(subarray/ 2d array) of winningCombos array
      let playerWin = 0 
      combo.forEach(c => {                  // for each item in the combo(subaray / 2d array)
        playerWin += board[c]              // add a value of that item(1 or -1 / X or O) to playerWin
        if (Math.abs(playerWin) === 3) winner = turn     // if playerWins absolute value === 3 the winner is    
      })                                                // whoever's turn it was
    }
  }
  
  function changeTurn() {
    turn *= -1
  }
  