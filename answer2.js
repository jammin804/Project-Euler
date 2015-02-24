/*First Solution*/

var sum = 0;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for (i = 2; i < 4000000 ; i++) {
    //Next Fibonacci numbers equals the sum of the previous numbers
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
    if (fib[i] % 2 === 0) {
        sum += fib[i];
        console.log("Total even sum " + sum);
    }
}

/*Second Solution*/
var x = 1;
var y = 2;
var z = 0;
var sum = 0;

while(x < 4000000){
    if(x%2 === 0){
        sum += x;
    }

    z = x + y; // Initial z = 1 + 2 = 3
    x=y; // Initial x was 1 now is 2
    y=z; // Initial y was 2 now is 3
}

console.log(sum);