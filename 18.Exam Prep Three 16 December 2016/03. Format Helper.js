
function solve(text) {

    text = text.toString().replace(/\s*(\")\s*/g, '"')
    text = text.toString().replace(/\s*(\.)\s*/g, '. ')
    text = text.toString().replace(/\s*(\,)\s*/g, ', ')
    text = text.toString().replace(/\s*(\:)\s*/g, ': ')
    text = text.toString().replace(/\s*(\!)\s*/g, '! ')
    text = text.toString().replace(/\s*(\?)\s*/g, '? ')
    text = text.toString().replace(/\s*(\;)\s*/g, '; ')

    let datePatt = /\.\s*(\d+)\.\s*(\d+)/g;
    let match = datePatt.exec(text);

    while (match !== null) {

        let replacement = '.' + match[1] + '.' + match[2];
        text = text.replace(match[0], replacement);
        match = datePatt.exec(text);
    }

    text = text.toString().replace(/\.\s*\.\s*\.\s*|\.\s*\.\s*\./g, '...');

    console.log(text);
}

solve('Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .');
solve('Make,sure to give:proper spacing where is needed... !');