//Date and Time
let d;
d = new Date();
d = d.toString();
d = new Date(2024, 5, 1, 20, 34, 6);
d = new Date('2024-06-0120:30:00');
d = new Date('06/01/2024 20:30:00');
d = new Date('2024-06-01');
d = new Date('06-01-2024');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();
d = new Date(1717293112403);
d = Math.floor(Date.now() / 1000);

console.log(d, '', typeof d);



