
function solve(args) {

    let landedPlanes = {};
    let towns = {}

    for (let input of args) {

        let tokens = input.split(' ');
        let planeId = tokens[0];
        let town = tokens[1];
        let passengersCount = Number(tokens[2]);
        let action = tokens[3];
        let currentPlane = { 'id': planeId, 'town': town, 'passenger': passengersCount, 'action': action };

        if (action === 'land') {
            if (!landedPlanes.hasOwnProperty(planeId)) {

                landedPlanes[planeId] = currentPlane;

                if (!towns.hasOwnProperty(town)) {
                    towns[town] = {
                        'arrivals': passengersCount,
                        'departures': 0,
                        'planes': [planeId]
                    }
                }
                else {
                    towns[town]['arrivals'] += passengersCount;

                    if (!towns[town]['planes'].includes(planeId))
                        towns[town]['planes'].push(planeId);
                }
            }
        }
        else if (action === 'depart') {
            if (landedPlanes.hasOwnProperty(planeId)) {

                if (towns.hasOwnProperty(town)) {
                    towns[town]['departures'] += passengersCount;

                    if (!towns[town]['planes'].includes(planeId))
                        towns[town]['planes'].push(planeId);
                }

                delete landedPlanes[planeId];
            }
        }
    }

    console.log('Planes left:');

    Object.keys(landedPlanes).sort().forEach((name, index) => {
        console.log('- ' + name);
    })

    Object.keys(towns).sort((a, b) => {

        if (towns[a].arrivals > towns[b].arrivals)
            return -1;
        else if (towns[a].arrivals < towns[b].arrivals)
            return 1;
        else
            return towns[a].localCompare(towns[b]);

    }).forEach((t, i) => {

        console.log(t);
        console.log('Arrivals: ' + towns[t].arrivals);
        console.log('Departures: ' + towns[t].departures);
        console.log('Planes:');

        let sortedTowns = towns[t]['planes'].sort(function (a, b) {
            if (a.toString().toLowerCase() < b.toString().toLowerCase()) return -1;
            if (a.toString().toLowerCase() > b.toString().toLowerCase()) return 1;
            return 0;
        })

        sortedTowns.forEach((plane, i) => {
            console.log('-- ' + plane)
        });
    })
}

solve([
    "Boeing474 Madrid 300 depart",
    "Boeing474 WashingtonDC 300 land",
    "Boeing474 Madrid 300 land",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);

console.log();

solve(["Airbus Paris 356 land", "Airbus London 321 land", "Airbus Paris 213 depart", "Airbus Ljubljana 250 land"]);