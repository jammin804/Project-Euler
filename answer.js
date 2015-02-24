var sum = 0;
for (i = (10-1); i > 0 ; i--) {
    if (i % 3 === 0 || i % 5 === 0){
        console.log(i);
        sum += i;
    }
}
console.log("Total sum " + sum);