
function solve(text) {

    let patt = /(\-*\d+)\s*\*\s*(\-*\d+\.\d+)/g;

    let result = [];
	
    for(let piece of text.split(';')){

        let match = patt.exec(piece);
        let multiplycation = Number(match[1]) * Number(match[2]);
        result.push(piece.replace(patt, multiplycation));
    }
	
    console.log(result.join(";"));
}

function s(arr) {

    arr =
        arr.replace(/(\-*\d+)\s*\*\s*(\-*\d+\.\d+)/g,
            (match, a,b) => Number(a) * Number(b));

    console.log(arr);
}

s('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');