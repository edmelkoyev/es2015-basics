let langArray = ['Javascript', 'PHP', 'Python', 'Ruby'];
let [js, php, py, rb] = langArray;

console.log(js, php, py, rb);

//////////////////////////////

let score = [3, 4, 5, 6];
// let [low, mid, high] = score;
let [low, ...rest01] = score;
console.log(low, rest01)

//////////////////////////////

let score01 = [3, 4, [5, 6]];
let [a1, a2, [b1, b2]] = score01;

console.log(a1, a2, b1, b2);

//////////////////////////////

function computeScore([x, y]) {
    console.log(x, y);
}

computeScore([300, 400]);

