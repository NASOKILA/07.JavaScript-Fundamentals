
function solve(str, times) {

    let result = '';
    for(let i = 1; i <= times; i++)
    {
        result += str;
    }

    console.log(result);
}

function s(str, n) {
    console.log(str.repeat(n));
}

s('repeat', 5);