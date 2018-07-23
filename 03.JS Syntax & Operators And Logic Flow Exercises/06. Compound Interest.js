
function solve(args) {

    let p = args[0];
    let i = args[1];
    let n = args[2];
    let t = args[3];

    let result = p * Math.pow(1 + i/(100 * (12/n)), 12/n * t);
    console.log(result.toFixed(2));
}

solve([1500, 4.3, 3, 6]);