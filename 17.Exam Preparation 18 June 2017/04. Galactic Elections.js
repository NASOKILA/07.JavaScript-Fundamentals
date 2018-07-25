
function solve(ballots) {

    let starSystems = new Map();
    let totalVotesAtAll = 0;

    for (let ball of ballots) {

        totalVotesAtAll += ball.votes;
        
        if (starSystems.has(ball.system)) {

            let currentCancidateAndListOfVotes = starSystems.get(ball.system);

            if (currentCancidateAndListOfVotes.has(ball.candidate)) {
                let currentVoters = currentCancidateAndListOfVotes.get(ball.candidate);
                currentVoters += ball.votes;
                currentCancidateAndListOfVotes.set(ball.candidate, currentVoters);
            }
            else {
                currentCancidateAndListOfVotes.set(ball.candidate, ball.votes);
            }

        }
        else {
            let currentCancidateAndListOfVotes = new Map();
            currentCancidateAndListOfVotes.set(ball.candidate, ball.votes);
            starSystems.set(ball.system, currentCancidateAndListOfVotes);
        }
    }

    let sistemsWinners = [];

    for (let system of starSystems) {
        
        let systemWinner = [...[...system][1]][0];
        systemWinner.push(system[0]);
    
        for (let candidate of [...system][1]) {
            let winnerVotes = Number(systemWinner[1]);
            let challengerVotes = Number(candidate[1]);

            if(winnerVotes < challengerVotes)
                systemWinner = candidate;
        }

        for (let candidate of [...system][1]) {
            
            if(candidate[0] !== systemWinner[0])
                systemWinner[1] += Number(candidate[1]);
        }

        sistemsWinners.push(systemWinner);
    }

    let winnerOfWinners = sistemsWinners.sort((a,b) => a[1] <= b[1])[0];

    if(sistemsWinners.every(e => e[0] === winnerOfWinners[0]))
    {
        let totalSumOfVotes = 0;
        sistemsWinners.map(w => totalSumOfVotes += w[1]);

        console.log(winnerOfWinners[0] + ' wins with ' + totalSumOfVotes + ' votes');
        console.log(winnerOfWinners[0] + ' wins unopposed!');
        return;
    }

    let totalSumOfVotes = 0;
    sistemsWinners.map(w => totalSumOfVotes += w[1]);
    
    if(winnerOfWinners[1] > (totalSumOfVotes / 2))
    {
        console.log(winnerOfWinners[0] + ' wins with ' + winnerOfWinners[1] + ' votes');
        
        sistemsWinners.shift();
        let runnerUpWinner = sistemsWinners.shift();

        sistemsWinners.filter(w => w[0] === runnerUpWinner[0])
        .map(o => runnerUpWinner[1] += o[1]);

        console.log('Runner up: ' + runnerUpWinner[0]);
    
        let runnerUpsystems = [];
    
        for (let system of [...starSystems]) {        
            for (let candidate of [...system][1]) {
                if(candidate[0] === runnerUpWinner[0]
                && winnerOfWinners[2] !== system[0]){

                    let runnerUpTotalSum = 0;
                    [...[...system][1]].map(w => runnerUpTotalSum += w[1]);
                    runnerUpsystems.push({'name':system[0], 'votes':runnerUpTotalSum});
                    break;
                }    
            }
        }

        for(let sys of runnerUpsystems.sort((a,b) => (a.votes <= b.votes))){
            console.log(sys.name + ': ' + sys.votes);
        }

    }
    else {
        
        sistemsWinners.shift();
        sistemsWinners.filter(w => w[0] === winnerOfWinners[0])
        .map(o => winnerOfWinners[1] += o[1]);

        let runnerUpWinner = sistemsWinners.shift();
        sistemsWinners.shift();
        sistemsWinners.filter(w => w[0] === runnerUpWinner[0])
        .map(o => runnerUpWinner[1] += o[1]);

        let winnerPercentage = Math.floor(100 / (totalVotesAtAll / winnerOfWinners[1]));
        let runnerPercentage = Math.floor(100 / (totalVotesAtAll / runnerUpWinner[1]));
        console.log('Runoff between ' + winnerOfWinners[0] + ' with ' + winnerPercentage + '%' + ' and ' + runnerUpWinner[0] + ' with ' + runnerPercentage + '%');
    }
}

solve(
    [ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
      { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
      { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
      { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
      { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
      { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
      { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]);