console.log("****************VAR******************");
var music = "Rock";
console.log("music variable before the block", music); {
    var music = "pop";
    console.log("music variable inside the block", music);
}

console.log("music variable after the block", music);

console.log("****************LET******************");
let music2 = "Rock";
console.log("music variable before the block", music); {
    let music2 = "pop";
    console.log("music variable inside the block", music);
}

console.log("music variable after the block", music);