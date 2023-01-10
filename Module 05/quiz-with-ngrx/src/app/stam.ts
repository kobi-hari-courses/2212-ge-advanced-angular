const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = ['a', 'x', 'z'];

const o = {
    x: 2,
    y: 3, 
    z: 4
}

// how do I change o.y to -3
const o2 = {
    ...o, 
    y: -3
}



// how do I add the value 5, in the immutable world
const x1 = [...a, 5];

// how do i concat a and b
const x2 = [...a, ...b];

// how to I add 0 to the begining of a?
const x3 = [0, ...a];

// how do I add 2.5 in the middle of a
const x4 = [...a.slice(0, 1), 2.5, ...a.slice(2, 3)];

// how do I remove item number 3 from a
const x5 = a.filter(i => i !== 3);

// how do I remove the second item from c
const x6 = c.filter((_, i) => i !== 1);

// how do I change the second item in c to 'y';
const x7 = c.map((v, i) => i === 1 ? 'y' : v);


