const numOfDice = document.getElementById("numOfDice");
const resultDice = document.getElementById("resultDice");
const resultImgDice = document.getElementById("resultImgDice");
const btn = document.getElementById("btn");

const values = [];
const images = [];

btn.onclick = function() {
    for (let i = 0; i < numOfDice.value; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="The pic numeb ${value} NOT FOUND">`)
    }

    resultDice.textContent = `Dice: ${values.join(" , ")}`;
    resultImgDice.innerHTML = images.join('');
}




