//Date and Time
let d;
d = new Date();
console.log(d);
d = d.toString();
console.log(d);
d = new Date(2024, 5, 1, 20, 34, 6);
console.log(d);
d = new Date('2024-06-0120:30:00');
console.log(d);
d = new Date('06/01/2024 20:30:00');
console.log(d);
d = new Date('2024-06-01');
console.log(d);
d = new Date('06-01-2024');
console.log(d);
d = Date.now();
console.log(d);

d = new Date('20-03-1981');
console.log(d);
d = d.getTime();
console.log(d);
d = d.valueOf();
console.log(d);
d = new Date(1717293112403);
d = Math.floor(Date.now() / 1000);

console.log(d, '', typeof d);



