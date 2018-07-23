
function solve(args) {

    let result = [];

    for(let elem of args)
    {
        if(elem < 0)
            result.unshift(elem);
        else
            result.push(elem);
    }

    result.forEach(e => console.log(e));
}

solve([3, -2, 0, -1]);