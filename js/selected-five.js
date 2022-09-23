
// selected 5 section 

document.getElementById('first-button').addEventListener('click', function (event) {
    // update order list by calling function 
  
    const firstNode = addListIteams('lionel-messi');
    if (firstNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
  
})

document.getElementById('second-button').addEventListener('click', function (event) {
    // update order list by calling function 
    const secondNode=  addListIteams('neymar-jr');
    if (secondNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
    

})

document.getElementById('third-button').addEventListener('click', function (event) {
    // update order list by calling function 
    const thirdNode =  addListIteams('kylin-mbappe');
    if (thirdNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
    

})
document.getElementById('fourth-button').addEventListener('click', function (event) {
    // update order list by calling function 
  const fourthNode =  addListIteams('Vitor-Machado');
    if (fourthNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})
document.getElementById('fifth-button').addEventListener('click', function (event) {
    // update order list by calling function 
 const fifthNode =   addListIteams('Sergio-Ramos');
    if (fifthNode< 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})
document.getElementById('sixth-button').addEventListener('click', function (event) {
   const sixthNode= addListIteams('Renato-Sanches');
    if (sixthNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})
document.getElementById('seven-button').addEventListener('click', function (event) {
    const sevenhNode = addListIteams('Zlatan-Ibrahimovic');
    if (sevenhNode < 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})
document.getElementById('eight-button').addEventListener('click', function (event) {
    const eighthNode = addListIteams('Antoine-Griezmann');
    if (eighthNode< 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})
document.getElementById('nine-button').addEventListener('click', function (event) {
    const ninehNode = addListIteams('Paul-Pogba');
    if (ninehNode< 6) {
        event.target.style.backgroundColor = "#A2A9AF";
        event.target.setAttribute('disabled', true)
    }
    else {
        return;
    }
})



