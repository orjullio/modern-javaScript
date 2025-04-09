//break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('parando...');
        break;
    }
    console.log(i);
}

//continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('pulando...');
        continue;
    }
    console.log(i);
}