let a = [];
for(i = 1; i <= 100; i++) {
    a.push(i)
}
console.log('array a:');
console.log(a);

let b3 = a.filter(e => e % 3 == 0);
console.log('array b3:');
console.log(b3);

let b5 = a.filter(e => e % 5 == 0);
console.log('array b5:');
console.log(b5);
