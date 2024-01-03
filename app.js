let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector( "#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//Player X and player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach ((box) => {
    box.addEventListener( "click",() => {

   
    console.log ("Box was clicked");
    if(turnO === true){
        box.innerText = "O"; // if turn is Player o than print O
        turnO = false; // and this line dedicates give the turn to next player
    } else {
        box.innerText = "X";  
        turnO = true;
    }
    box.disabled = true;

    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
msgContainer.classList.remove ("hide");
console.log(winner);
disableBoxes() 
}
const checkWinner =() => {
   for ( let pattern of winPatterns) {

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner", pos1Val);

            showWinner(pos1Val);
        }
    }
}
};
newGameBtn.addEventListener("click", resetGame);