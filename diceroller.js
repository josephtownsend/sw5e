function rollDice(numDice, numSides){
    let total = 0;
    for (let i = 0; i < numDice; i++){
        total += Math.floor(Math.random() * numSides) + 1;
    }
    return total;
}
rollDice(2, 6)