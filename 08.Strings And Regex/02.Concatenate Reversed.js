
function solve(args) {

    let str = '';

    for(let i = 0; i <= args.length-1; i++) {
        str += args[i]
    }

    console.log(str.split("").reverse().join(""));
}

solve(['I','am','student']);
solve(['race', 'car']);

console.log();
function s(arr) {

    console.log(arr.join("").split("").reverse().join(""));
}

s(['I','am','student']);
s(['race', 'car']);