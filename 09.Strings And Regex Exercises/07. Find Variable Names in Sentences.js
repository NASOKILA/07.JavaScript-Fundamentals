
function solve(args) {

    let result = '';
    let regex = /\b^_[a-zA-Z]+\b/gm;
    for(let elem of args.split(' '))
    {
        let match = elem.match(regex);
        if(match)
        {
            result += match[0].substr(1) + ',';
        }
    }

    console.log(result.slice(0,-1));
}

function s(text) {

    let arr = [];
    let match = text.match(/\b\_[a-zA-Z0-9]+\b/g);

    if(match != null)
        match.forEach(e => arr.push(e.toString().substr(1)));

    console.log(arr.join(','));
}