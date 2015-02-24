var num = 600851475143;
var largestFact = 0;
var counter = 2;

while(counter * counter <= num){
    if(num%counter === 0){
        num = num / counter;
        largestFact = counter;
    }else {
        counter++;
    }

}
if(num > largestFact){
    largestFact = num;
}

console.log(largestFact);