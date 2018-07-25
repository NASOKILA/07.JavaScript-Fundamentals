
let text = "This is an example text !!!!";
let pattern = /\.\s*(\d+)\.\s*(\d+)/g;
let regex = new RegExp(pattern, 'gm');
let match = pattern.exec(text);

while(match !== null){
    match = pattern.exec(text); 
}