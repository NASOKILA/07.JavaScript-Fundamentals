
function solve(args) {

    let timesToRotate = Number(args[args.length-1]);
    args.pop();
    let arr = args;

    timesToRotate %= arr.length;

    for(let i = 0; i < timesToRotate; i++)
    {
        let lastElem = arr.pop();
        arr.unshift(lastElem);
    }

    console.log(arr.join(' '));
}

function rotate(arr) {

    let n = Number(arr.pop());

    n = n % arr.length;

    for(let i = 0; i < n; i++){

        const currentElement = arr.pop();

        arr.unshift(currentElement);
    }

    console.log(arr.join(" "));
}

rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);

rotate([1,2,3,4,2]);