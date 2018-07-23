
function solve(text, delimeter) {
    let result = text.split(delimeter);
    result.forEach(e => console.log(e));
}

function s(text, delimeter){
    text.split(delimeter).forEach(e => console.log(e));
}

s('One-Two-Three-Four-Five', '-');