function CountUpAndDown(n) {
    console.log("Going up!");

    for(let i = 0; i<n; i++){
        console.log(i);
    }
    console.log("At the top! Going back down...\n");
    for(let j = n-1; j>=0; j--){
        console.log(j);
    }
    console.log("Back down! Bye!");
}

CountUpAndDown(1)

//Big O notation is O(n) --> linear
// If n is 1, then the amount of operations will be 9
// If n is 2, then the amount of operations will be 18
// If n is 3, then the amount of operations will be 27