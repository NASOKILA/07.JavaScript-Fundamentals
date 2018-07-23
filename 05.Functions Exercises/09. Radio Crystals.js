


function radioCristals(arr) {

    let targetThickness = arr[0];

    let operations = {
        cut: (num) => num / 4, 
        lap: (num) => num -= num / 5, 
        grind: (num) => num - 20,
        etch: (num) => num - 2,
        xray: (num) => {console.log(`X-ray x1`);return ++num},
        transportAndWash:(num) => {console.log(`Transporting and washing`);return Math.floor(num)}
    };

    for(let i = 1; i < arr.length; i++)
    {
        let currentMicrons = arr[1];
        console.log(`Processing chunk ${currentMicrons
        } microns`);
		
        currentMicrons = manipulateCristal(targetThickness, currentMicrons, 'Cut', operations.cut);
        currentMicrons = manipulateCristal(targetThickness, currentMicrons, 'Lap', operations.lap);
        currentMicrons = manipulateCristal(targetThickness, currentMicrons, 'Grind', operations.grind);
        currentMicrons = manipulateCristal(targetThickness, currentMicrons, 'Etch', operations.etch);

        if(currentMicrons+1 === targetThickness)
            currentMicrons = operations.xray(currentMicrons);

        console.log(`Finished crystal ${currentMicrons} microns`);
    }

    function manipulateCristal(targetThickness, currentMicrons, opName, operation) {

        let counter = 0; 
		
        while(operation(currentMicrons) >= targetThickness-1){

            currentMicrons = operation(currentMicrons); 
            counter++;
        }

        if(counter > 0){
            console.log(`${opName} x${counter}`);
            currentMicrons = operations.transportAndWash(currentMicrons); 
        }

        return currentMicrons; 
    }
}

radioCristals([1375, 50000]);