// Initializations : 
let arr = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'];

// Emptying array
// 1. clearing by []
const output1 = arr = [];
document.getElementById('empty1').innerHTML = output1;

// 2. clearing by length
const output2 = arr.length = 0;
document.getElementById('empty2').innerHTML = output2;

// 3. clearing by arr.length
const output3 =
    while (arr.length) {
        arr.pop()
    }
document.getElementById('empty3').innerHTML = output3;