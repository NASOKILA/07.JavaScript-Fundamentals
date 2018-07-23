function solve(n) {

    for(let i = 1; i <= n; i++)
    {
        let simbol = '';
        for(let ii = 1; ii <= i; ii++)
        {
            simbol += '*';
        }
        console.log(simbol);
    }

    for(let i = n-1; i > 0; i--)
    {
        let simbol = '';
        for(let ii = 1; ii <= i; ii++)
        {
            simbol += '*';
        }
        console.log(simbol);
    }
}

solve(5);