

//common function

// call with player id and update ol list

function addListIteams(playerId) {
    const playerName = document.getElementById(playerId);
    const playerNameString = playerName.innerText;
    const listContainer = document.getElementById('list-container');
    const listItem = document.createElement('li');
    listItem.classList.add('li-design')
    listItem.innerText = playerNameString;
    const nodeList = listContainer.childNodes.length   
    console.log(nodeList);
   
    if (nodeList >5 ) {
        alert('you cant add more than 5 person');
        return;
    }
    listContainer.appendChild(listItem);
     return nodeList;
    
}


// get input field value

function getInputField(valueById) {
    const fieldValue = document.getElementById(valueById);
    if (isNaN(fieldValue.value) || fieldValue.value < 0) {
        alert('please provide a valid Number')
        return;
    }
    const fieldValueFloat = parseFloat(fieldValue.value);
    return fieldValueFloat
}


// return player expense

function playerExpense() {
    const perPlayerExpense = getInputField('per-player-field')
    const playerNumber = document.getElementById('list-container');
    const nodeList = playerNumber.childNodes.length -1 ;
    console.log(nodeList);
    if (nodeList <= 0) {
        alert('please Select At least One Player and fill up "Per player" field')
        return;
    }
    const previousExpense = document.getElementById('player-expense');
    const finalExpense = perPlayerExpense * nodeList;
    if (isNaN(finalExpense) || finalExpense < 0) {
        
        return;
    }
    previousExpense.innerText = finalExpense;

    return finalExpense;
}
