let staticLangs = ['C', 'C++', 'Java'];
let dynamicLangs = ['JavaScript', 'PHP', 'Ruby'];

// concat array elements
let languages = [...staticLangs, 'C#', ...dynamicLangs, 'Python'];
console.log(languages);

// Spread array elements into function params
function add(x, y, z) {
    console.log(x + y + z);
}

let nums = [2, 3, 4];
add(...nums);

