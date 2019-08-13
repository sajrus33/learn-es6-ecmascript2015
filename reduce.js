const arrOfArrs = [
    ["steve", "matt", "superStevomatt"],
    ["steve", "matt", "SuperMattoSteve"],
    ["steve", "matt"],
    ["steve", "matt"],
    ["steve", "matt"],
    ["steve", "matt"]
];

const flattenedArr = arrOfArrs.reduce((acc, val) => {
    return acc.concat(val);
}, ["start"])

console.log(flattenedArr);

const makeCSV = (acc, val, n) => `${acc}\n${n}.${val[0]} ${val[1]}`
const superCSV = arrOfArrs.reduce(makeCSV, "frist name last name");
console.log(superCSV);

const makeCSVRow = (acc, val) => `${acc},${val}`;
const makeCSV2 = (acc, val) => {
    const row = val.slice(1).reduce(makeCSVRow, val.slice(0, 1))
    return `${acc}\n${row}`
};
const rows = arrOfArrs.reduce(makeCSV2, "First, Last, Super ID");
console.log(rows);
const slajs = arrOfArrs[0].slice(0, 1);
console.log(slajs);


// execute functions with acc param, using reduce() ofc
const add1 = (num) => num + 1;
const doubleIt = (num) => num * 2;
const tripleIt = (num) => num * 3;

const arrOfFuncs = [add1, doubleIt, tripleIt];
const apply = (acc, val) => {
    console.log("", val, ", num = ", acc);
    return val(acc)
};
const result = arrOfFuncs.reduce(apply, 2);
console.log(result);

const compose =
    arr =>
        val => arr.reduce(apply, val);

const add1DoubleTriple = compose(arrOfFuncs);

console.log(add1DoubleTriple(4));
console.log(add1DoubleTriple(6));


