
function solve(args) {

    for(let i = 0; i <= args.length-1; i++)
    {
        let num = args[i];

        let result = Math.log2(num);
        console.log(result);
    }

}

let input = [1024,1048576,256,1,2,50,100];

solve(input);