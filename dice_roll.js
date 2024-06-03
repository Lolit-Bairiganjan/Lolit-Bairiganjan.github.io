function rollDice(){
    let list_result = [];
    let img_list = [];
    const diceImages = document.getElementById("dice_images");
    const numofDice = document.getElementById("dice_num").value;
    for(let i=0; i<numofDice; i++){
        rand = Math.ceil(Math.random()*5)+1;
        list_result[i] = rand;
        img_list.push(`<img src="assets/dice_Images/dice${rand}.png" alt="Dice ${rand}">`)
    }
    document.getElementById("dice_result").textContent=`dice results: ${list_result}`;
    diceImages.innerHTML = img_list.join('');
}
