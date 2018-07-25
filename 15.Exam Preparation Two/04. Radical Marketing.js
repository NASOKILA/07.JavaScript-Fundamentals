
function solve(args) {

    let log = [];
    let personSubscribed = {};
    let rows = [];
    for (let row of args) {
        if (row.indexOf('-') === -1) {
            let name = row[0];
            let person = {};
            person[name] = new Set('');

            if (log.indexOf(person) === -1)
                log.push(person);

            if (!personSubscribed.hasOwnProperty(name))
                personSubscribed[name] = 0;
        }
        else if (row.indexOf('-') !== -1) {
            if (rows.indexOf(row) !== -1)
                continue;

            rows.push(row);

            let firstPerson = row.split('-')[0];
            let secondPerson = row.split('-')[1];

            let currentSubscribers = personSubscribed[firstPerson];
            personSubscribed[firstPerson] = currentSubscribers + 1;

            let firstPersonExists = false;
            let secondPersonExists = false;

            log.forEach(e => {

                let key = Object.keys(e)[0];

                if (key === firstPerson)
                    firstPersonExists = true;

                if (key === secondPerson)
                    secondPersonExists = true;
            });

            if (!firstPersonExists || !secondPersonExists) {
                continue;
            }

            Subscribe(firstPerson, secondPerson);
        }
    }

    log.sort((a, b) => {
        "use strict";

        let subsCountOne = [...a[Object.keys(a)]].length;
        let subsCountTwo = [...b[Object.keys(b)]].length;
        let resultCode = subsCountTwo - subsCountOne;

        if (resultCode === 0)
            resultCode = personSubscribed[Object.keys(b)] - personSubscribed[Object.keys(a)];

        return resultCode;
    });

    let mostImportantPerson = log[0];
    let counter = 1;

    console.log(Object.keys(mostImportantPerson)[0]);

    mostImportantPerson[Object.keys(mostImportantPerson)[0]].forEach(e => {
        "use strict";
        console.log(counter + '. ' + e);
        counter++;
    });

    function Subscribe(firstPerson, secondPerson) {

        if (firstPerson !== secondPerson) {

            let currentSecondPerson = log.filter(e => Object.keys(e)[0] === secondPerson)
            let name = Object.keys(currentSecondPerson[0]);
            let subscribers = currentSecondPerson[0][secondPerson];

            if (!subscribers.hasOwnProperty(firstPerson))
                subscribers.add(firstPerson);
        }
    }
}

solve(['A',
    'B',
    'C',
    'D',
    'A-B', 'A-B', 'A-A',
    'B-A',
    'C-A',
    'C-B',
    'D-A']);

solve(['J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J']);