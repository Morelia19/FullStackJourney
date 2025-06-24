function printAllPair(n){
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            console.log(i, j);
        }
    }
}

printAllPair(1)

//Big O notation is O(n^2) --> Quadratic --> Time complexity
// Since there is a for loop in a for loop, it means we hace a O(n) * O(n) = O(n^2)