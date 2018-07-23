function solve(word, sentence) {

    let strLength = word.length;
   
    let occurrencies = 0;
    for(let i = 0; i < sentence.length; i++)
    {
        let piece = sentence.substr(i, strLength);

        if(word === piece)
            occurrencies++;
    }
	
    console.log(occurrencies);
}
