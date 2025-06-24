function addUpTo(n){
    let total = 0;
    for (let i = 0; i <= n; i++){
        total +=i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed 1: ${(t2 - t1) / 1000} seconds.`);

//Big O notation is O(n) --> linear
// If n is 1, then the amount of operations will be 7
// If n is 2, then the amount of operations will be 13
// If n is 3, then the amount of operations will be 19
