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
