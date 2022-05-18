const names: string[] = [];
// const names: readonly string[] = ["Dylan"];//! immutable array/ readonly
names.push("strings"); // no error
console.log(names);

// integers

const n: number[] = [1, 2, 3];
n.push(4);
console.log(n);
