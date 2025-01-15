// Boolean
let isOnline:boolean = true;

if(isOnline) {
  console.log("You are Online");
}

let isEven = (a:number): boolean=>{
    return true;
}

isEven(5)

//BigInt

let bigNumber: bigint = 123456789012345678901234567890n;
console.log(bigNumber);

// Without the n, JavaScript would treat it as a regular number
let max_number: bigint = 90071992547409910000000n;
console.log(max_number);
