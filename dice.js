document.addEventListener('DOMContentLoaded', () => 
    {
    const dice1Image = document.getElementById('dice1');
    const dice2Image = document.getElementById('dice2');
    const rollButton = document.getElementById('rollButton');
    const editButton = document.getElementById('editButton');
    const player1NameDisplay = document.getElementById('player1Name');
    const player2NameDisplay = document.getElementById('player2Name');
    

    // Function to roll the dice
function rollDice() {
    // Generate two random numbers between 1 and 6
    const randomNumber1 = 
    Math.floor(Math.random() * 6) + 1;
    const randomNumber2 =
    Math.floor(Math.random() * 6) + 1;

    // Update the dice images based on the random numbers
    dice1Image.src = `images/dice${randomNumber1}.png`;
    // example: images/dice1.png
    dice2Image.src = `images/dice${randomNumber2}.png`;

    
    // Announce the winner
    if (randomNumber1 > randomNumber2) {
        alert(`${player1NameDisplay.textContent} wins!`);
    } else if (randomNumber2 > randomNumber1) {
        alert(`${player2NameDisplay.textContent} wins!`);
    } else {
        alert("It's a tie!");
    }
}
function editNames() {
    const newPlayer1Name = prompt("Enter New name for Player 1:", player1NameDisplay.textContent);
    if (newPlayer1Name !== null && newPlayer1Name.trim() !== "") {
        player1NameDisplay.textContent = newPlayer1Name;
    }
    // Repeat for Player 2
    const newPlayer2Name = prompt("Enter New name for Player 2:", player2NameDisplay.textContent);
    if (newPlayer2Name !== null && newPlayer2Name.trim() !== "") {
        player2NameDisplay.textContent = newPlayer2Name;
    }
}
    // Update the button text
    rollButton.addEventListener('click', rollDice);
    // Updste the edit button text
    editButton.addEventListener('click', editNames);
});