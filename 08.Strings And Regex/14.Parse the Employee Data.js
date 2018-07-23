
function solve(args) {

    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z0-9 \-]+)$/;

    for(let elem of args)
    {
        let match = regex.exec(elem);

        if(match) 
        {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

function s(input) {

    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z0-9 \-]+)$/;

    for(let row of input){

        let match = pattern
            .exec(row);

        if(match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

s(['Ivan - 500 - Employee']);

s(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
]);