
function solve(args) {

    let airport = new Map();
    let townStatisticks = new Map();
    let townPlanes = new Map();

    for (let row of args) {

        let input = row.split(' ');
        let planeId = input[0];
        let town = input[1];
        let passengersCount = Number(input[2]);
        let action = input[3];

        if (action === 'land') {

            if (airport.has(planeId))
                continue;
            else
                airport.set(planeId, 'land');

            if (!townStatisticks.has(town))
                townStatisticks.set(town, [0, 0]);

            if (!townPlanes.has(town))
                townPlanes.set(town, new Set());

            townStatisticks.get(town)[0] += Number(passengersCount);
            townPlanes.get(town).add(planeId);

        } else {

            if (airport.has(planeId))
                airport.delete(planeId);
            else {
                continue;
            }

            if (!townStatisticks.has(town))
                townStatisticks.set(town, [0, 0]);

            if (!townPlanes.has(town))
                townPlanes.set(town, new Set());

            townStatisticks.get(town)[1] += passengersCount;
            townPlanes.get(town).add(planeId);
        }
    }

    let sortedAirport = [...airport]
        .sort((a, b) => a[0].localeCompare(b[0]));

    console.log("Planes left:");

    for (let [planeId] of sortedAirport) {
        console.log('- ' + [planeId][0]);
    }

    let sortedTowns = [...townStatisticks].sort(sortTowns);

    for (let [town, statistics] of sortedTowns) {

        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);

        console.log("Planes:");
        let sortedPlanes = [...townPlanes.get(town).values()]
            .sort((a, b) => a.localeCompare(b));

        sortedPlanes.forEach(e => console.log('-- ' + e));
    }

    function sortTowns(a, b) {

        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCrieteria = bArrivals - aArrivals;

        if (firstCrieteria !== 0)
            return firstCrieteria;
        else
            return a[0].localeCompare(b[0]);
    }
}

solve(["Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"]);