/*function createElement(id) {
  const para = document.createElement("p");
  const node = document.createTextNode(id);
  para.appendChild(node);

  const element = document.getElementById("diceRollResult");
  element.appendChild(para);  
};*/

let spinach = document.getElementById('numberOfDice');
let potato = document.getElementById('diceRollResult');
let brocolli = 1
let turnip = "turnip"

window.addEventListener("load", (event) => {
  console.log('spinach value is ' + spinach);
});
window.addEventListener("click", (event) => {
  console.log('spinach value is ' + spinach);
});

window.addEventListener("load", (event) => {
  console.log('potato value is ' + potato);
});
window.addEventListener("load", (event) => {
  console.log('turnip value is ' + turnip);
});
window.addEventListener("load", (event) => {
  console.log('brocolli value is ' + brocolli);
});
function diceRoller(sides) {
    let diceRoll = Math.floor(Math.random() * sides) + 1;
      return diceRoll;
}
  
  
//Prints dice roll to the page

function printNumber(number) {
    const para = document.createElement("p");
    const node = document.createTextNode(number);
    para.appendChild(node);

    const element = document.getElementById("diceRollResult");
    element.appendChild(para);  
}





/* //let numberOfDice = document.getElementById('numberOfDice').value;
   // document.getElementById('button').onclick = console.log(1);
 function rolld6(){ 
    var numberOfDice = document.getElementById('numberOfDice').value;
    //document.getElementById('button').onclick = console.log(1);
    let d6 = document.getElementById('d6');
    d6.onclick = function() {
        console.log(numberOfDice)
        for (let i = 1; i <= numberOfDice; i++) {
          printNumber(diceRoller(6));
        }
    }
} */

//rolld6()

//Identify how many times to roll the dice
//Roll the dice
//Add the rolls together
//print dice rolls to the page
  