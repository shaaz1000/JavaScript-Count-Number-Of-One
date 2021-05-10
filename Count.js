const binaryData = "111000110111111111111"
const newArray = binaryData.split("")
let largestCount = 0;
let currentCount = 0;
for(let i=0;i<newArray.length;i++){
    if(newArray[i]==0){
        currentCount = 0
    } else{
        currentCount ++
    }
    if (currentCount > largestCount){
        largestCount = currentCount
    }
    
}

console.log(largestCount,"17")