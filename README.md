# Fancy a [game](https://albina-tictactoe.netlify.app)? 

This project is a simple Tic-Tac-Toe game built with React using hooks, state management, and some basic algorithms to determine the winner. The game is interactive, allowing two players to play on a 3x3 grid, with a reset button to start a new game.

## Data Structures and Algorithms Used

### State Management:
- useState: Used to manage the game state, including the board cells, player turns, and winning conditions.
- useEffect: Listens for changes in player moves and checks for winning combinations.

### Arrays:
- The board is represented as an array of 9 elements, initially populated with numbers to indicate empty cells.
- Arrays are also used to track the positions of **X** and **O** moves.

### Winner Detection:
- A 2D array (**results**) is used to store all possible winning combinations (rows, columns, and diagonals).
- The **forLongCombination** function checks if a player's moves match any winning combination by counting matches between arrays.

### Game Logic:
- The game logic alternates turns between players using a boolean **flag**.
- Each click updates the respective player's move array and checks for a win condition.

### Sorting and Comparison:
- Player moves are sorted before checking against winning combinations to ensure accurate detection regardless of move order.

  
![winnerO](https://github.com/albinamels/React-TicTacToe/blob/master/src/winnerO.png)
![winnerX](https://github.com/albinamels/React-TicTacToe/blob/master/src/winnerX.png)
