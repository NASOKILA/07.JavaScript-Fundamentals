
function solve(args) {

    let result = args.sort(compare).join('\n');
    console.log(result);
    function compare(a,b)
    {
        if(a.length < b.length)
            return -1;
        else if(a.length > b.length)
            return 1;
        else
        {
            if(a < b)
                return -1;
            else if(a > b)
                return 1;
            else
                return 0;
        }
    }
}

function sortArr (arr) {

    arr.sort((a,b) => {
        
        if(a.length > b.length){
            return 1;
        }else if(a.length < b.length){
            return 0;
        }
        else
        {
            if(a >= b){
                return 1;
            }else{
                return 0;
            }
        }
    })
        .forEach(e => console.log(e));
}

sortArr(['Deny',
    'omen',
    'test',
    'Default']);

console.log();

sortArr(["Banana",
    "Orange",
    "Applee",
    "Mangoo"]);

console.log();

sortArr([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

console.log();

sortArr(['alpha',
    'beta',
    'gamma']);