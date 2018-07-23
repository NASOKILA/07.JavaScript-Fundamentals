
function solve(word) {

    let reversedWord = word.split('').reverse().join("");
    if(word === reversedWord)
        console.log(true);
    else
        console.log(false);
}

solve('racecar');
solve('haha');
solve('unitinu');