// let num = 10;
let n = prompt("Enter a number");
num = parseInt(n);

//Printing the table of num, FOR LOOP
for (let i = 1; i<= 10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
}

//Printing the table of num, WHILE LOOP
let j = 1;
while (j <= 10){
    console.log(`${num} * ${j} = ${num*j}`);
    j++;
}