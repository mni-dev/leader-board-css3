//grab and set style attribute to h1 tag
const players = document.getElementById('top-players');
players.innerHTML = 'Ranked Players';
players.setAttribute("style", "color: white; background-color: orange; text-align: center; border-radius: 5px;");
//  players.style.backgroundColor = 'orange';
//  players.style.textAlign = 'center'
//  players.style.color = 'black';

//setting bg-color using byClassName
const setBgColor = document.getElementsByClassName('player');
for(let i =0; i<setBgColor.length; i++){
    setBgColor[i].setAttribute("style", "background-color: red; color: white;margin-right: 5px; border-radius: 5px;")
}
console.log(setBgColor);

//Create New li tags on buttton-click
function addNewLi(){
    const parentElem = document.getElementById('i-am-ul');
    const newLi = document.createElement("li");
    newLi.textContent = 'I am new to the list!'
    parentElem.appendChild(newLi);  
}

//Raise numbers in input tag on button-click
/* function raiseNum(){
    const inputNum =document.getElementById("increase");
    let newNum = inputNum.value;
    newNum++;
    inputNum.value = newNum;
    return newNum;
} */

//stop code execution after 5 and disable button
function raiseNum(){
    const inputNum =document.getElementById("increase");
    let newNum = inputNum.value;
    newNum++;
    if(newNum > 5){
        // break;
        const btn = document.getElementById('click-btn');
        btn.setAttribute("disabled", true)
        // see the difference with 'return' inside and outside the 'if code block'
        return newNum;
    }
    inputNum.value = newNum;
    // return newNum;
}

//

