var content = document.getElementById('content');


/////STATE
var ticTacToe = [
    ["-","-","-"], //row 0
    ["-","-","-"], //row 1
    ["-","-","-"], //row 2
]

var isPlayerXTurn = false;

/////functions////
function buttonClicked(event){
    //console.log(event);
    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id;

    let rowIndex = clickedButtonId[0];
    let columnIndex = clickedButtonId[2];

    let nextPlayer = document.getElementById('currentPlayer');

    //update the state
    if (isPlayerXTurn) {
    ticTacToe[rowIndex][columnIndex]= "X";
    isPlayerXTurn = false;
    nextPlayer.innerHTML = "It's player O's turn!"
    } else { // it is O's turn
    ticTacToe[rowIndex][columnIndex]= "O"; 
    isPlayerXTurn = true;
    nextPlayer.innerHTML = "It's player X's turn!"
    }

    //call render function
    renderCell(rowIndex,columnIndex);

    //console.log(clickedButtonId);
decideWinner (ticTacToe)
}

function decideWinner (result){

    let nextPlayer = document.getElementById('currentPlayer');

    if ((result[0][0] == "O") && (result [0][1] == "O") 
    && (result[0][2] == "O")){
        nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
        console.log("CONGRATS PLAYER O WINS")
    } else if ((result[1][0] == "O") && (result[1][1] == "O")
      && (result[1][2]== 'O')){
          nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
          console.log ("CONGRATS PLAYER O WINS")
    } else if ((result[2][0]== "O")&& (result [2][1]== "O")
      && (result [2][2] == "O")){
          nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
          console.log ('CONGRATS PLAYER O WINS')
    }else if ((result [0][0]== "O")&& (result [1][0] == "O")
       && (result [2][0]) == "O"){
           nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
           console.log ('CONGRATS PLAYER O WINS')
    }else if ((result [0][1]== "O") && (result [1][1]== "O")
       && (result [2][1]== "O")){
           nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
           console.log ('CONGRATS PLAYER O WINS')
    }else if ((result [0][2]== "O") && (result [1][2]== "O")
        && (result [2][2] == "O")){
            nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
            console.log ('CONGRATS PLAYER O WINS')
    }else if ( (result [0][0]== "O")&& (result [1][1]== "O")
        && (result [2][2]== "O")){
            nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
            console.log ('CONGRATS PLAYER O WINS')
    }else if ((result [0][2] == "O")&& (result [1][1]== "O")
        && (result [2][0] == "O")){
            nextPlayer.innerHTML = "CONGRATS PLAYER O WINS"
            console.log ('CONGRAGTS PLAYER O WINS')
    }else if ((result[0][0] == "X") && (result [0][1] == "X") 
        && (result[0][2] == "X")){
            nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
            console.log ('CONGRATS PLAYER X WINS')
    }else if ((result[1][0] == "X") && (result[1][1] == "X")
        && (result[1][2]== 'X')){
            nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
            console.log ("CONGRATS PLAYER X WINS")
    }else if ((result[2][0]== "X")&& (result [2][1]== "X")
      && (result [2][2] == "X")){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRATS PLAYER X WINS')
    }else if ((result [0][0]== "X")&& (result [1][0] == "X")
      && (result [2][0]) == "X"){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRATS PLAYER X WINS')
    }else if ((result [0][1]== "X") && (result [1][1]== "X")
      && (result [2][1]== "X")){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRATS PLAYER X WINS')
    }else if ((result [0][2]== "X") && (result [1][2]== "X")
      && (result [2][2] == "X")){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRATS PLAYER X WINS')
    }else if ( (result [0][0]== "X")&& (result [1][1]== "X")
      && (result [2][2]== "X")){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRATS PLAYER X WINS')
    }else if ((result [0][2] == "X")&& (result [1][1]== "X")
      && (result [2][0] == "X")){
          nextPlayer.innerHTML = "CONGRATS PLAYER X WINS"
          console.log ('CONGRAGTS PLAYER X WINS')
    }
}
content.innerHTML = renderGame(ticTacToe);

/////render functions

function renderCell(row,column){

    let id = `${row},${column}`;
    let button = document.getElementById(id);
    button.innerHTML = ticTacToe[row][column];
    console.log(button)
}


function renderGame(game) {
    // Change this render function to use the "game" parameter
    //<span id="currentPlayer">O</span>
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4 id= "currentPlayer">It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button id="0,0" onClick="buttonClicked(event)">${game[0][0]} </button>
                <button id="0,1" onClick="buttonClicked(event)">${game[0][1]}</button>
                <button id="0,2" onClick="buttonClicked(event)">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="1,0" onClick="buttonClicked(event)">${game[1][0]}</button>
                <button id="1,1" onClick="buttonClicked(event)">${game[1][1]}</button>
                <button id="1,2" onClick="buttonClicked(event)">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="2,0" onClick="buttonClicked(event)">${game[2][0]}</button>
                <button id="2,1" onClick="buttonClicked(event)">${game[2][1]}</button>
                <button id="2,2" onClick="buttonClicked(event)">${game[2][2]}</button>
            </div>
        </div>
    `
}