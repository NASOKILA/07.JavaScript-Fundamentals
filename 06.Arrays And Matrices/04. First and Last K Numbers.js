
function firstKElements(arr){
    let numsToTake = arr[0];
    console.log(arr.slice(0, numsToTake)); 
    console.log(arr.slice(arr.length-numsToTake));
}
firstKElements([3,7,8,9]);