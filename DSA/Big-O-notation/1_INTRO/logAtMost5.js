function logAtMost5(n) {
    for (let i = 1; i<= Math.min(5, n); i++){
        console.log(i);
    }
}

logAtMost5(1000)

//Big O notation is O(1) --> Constants
// It doesn't matter how big it gets, it will always be 1.