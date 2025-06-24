function addUpTo(n){
    return n * (n+1)/2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed 2: ${(t2 - t1) / 1000} seconds.`);

//Big O notation is O(1) --> constant
// If n is 1, then the amount of operations will be 3
// If n is 2, then the amount of operations will be 3
// If n is 3, then the amount of operations will be 3
