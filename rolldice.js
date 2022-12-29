
const d4Button = document.getElementById("d4");
const d6Button = document.getElementById("d6");
const d8Button = document.getElementById("d8");
const d10Button = document.getElementById("d10");
const d12Button = document.getElementById("d12");
const d20Button = document.getElementById("d20");
const d100Button = document.getElementById("d100");

 
function rollDice (numberOfDice, numberOfSides){
  let diceRollArray = []
  let total = 0

  function rollSingleDie(numberOfSides){ 
    let diceRoll = Math.floor(Math.random() * numberOfSides) + 1
    return diceRoll      
  };

  for (let i = 1; i <= numberOfDice; i++) {
    let diceRoll = rollSingleDie(numberOfSides);
    diceRollArray.push(diceRoll)
  }
  
  diceRollArray.forEach(item => {
        total += item;
  });
  return {
    list: diceRollArray,
    total: total
  }   
};

function clickedButton(numberOfSides){
  let numberOfDice = document.getElementById('numberOfDice').value;
  
  function printNumber(number) {
    const para = document.createElement("p");
    const node = document.createTextNode(number);
    para.appendChild(node);

    const element = document.getElementById("diceRollResult");
    element.appendChild(para);  
  };

  if (numberOfDice < 1){
    alert("You must enter a number of dice to roll");
  }
  else{
    //console.log("The text input should be working, the number of dice is ", numberOfDice)
    let diceRoll = rollDice(numberOfDice, numberOfSides)
    let total = diceRoll.total
    let diceList = diceRoll.list
    //console.log("the final total is ", total)
    //console.log(diceList)
    
    printNumber(`you rolled ${numberOfDice}d${numberOfSides} (${diceList}) for a total of ${total}`)
  };
  
};

d4Button.addEventListener('click', () => {
  clickedButton(4)
}); 

d6Button.addEventListener('click', () => {
  clickedButton(6)
}); 

d8Button.addEventListener('click', () => {
  clickedButton(8)
}); 

d10Button.addEventListener('click', () => {
  clickedButton(10)
}); 

d12Button.addEventListener('click', () => {
  clickedButton(12)
}); 

d20Button.addEventListener('click', () => {
  clickedButton(20)
}); 

d100Button.addEventListener('click', () => {
  clickedButton(100)
}); 