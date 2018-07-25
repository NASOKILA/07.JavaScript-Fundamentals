
function solve(args) {

    let numbers = [];
    let symbols = [];

    for (let currentElement of args) {

        if (currentElement === '/'
            || currentElement === '*'
            || currentElement === '+'
            || currentElement === '-') {
            symbols.push(currentElement);
        }
    }


    for (let i = 0; i < args.length; i++) {

        let currentElement = args[i];

        if (currentElement === '/'
            || currentElement === '*'
            || currentElement === '+'
            || currentElement === '-') {

            if (numbers.length <= 1) {
                console.log('Error: not enough operands!');
                return;
            }

            let secondNum = numbers.pop();
            let firstNum = numbers.pop();
            let result = findResult(firstNum, secondNum, currentElement);

            numbers.push(result);
            symbols.pop();

            if (numbers.length === 1 && symbols.length == 0)
                break;
        }
        else {
            numbers.push(currentElement);
        }
    }

    if (numbers.length > 1)
        console.log('Error: too many operands!');
    else
        console.log(numbers[0]);

    function findResult(firstNum, secondNum, operand) {

        let result = 0;

        if (operand === "*")
            result = firstNum * secondNum;
        else if (operand === "/")
            result = firstNum / secondNum;
        else if (operand === "+")
            result = firstNum + secondNum;
        else if (operand === "-")
            result = firstNum - secondNum;

        return result;
    }
}