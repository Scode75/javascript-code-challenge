//Print out even numbers from 0-10

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  

//  Print a table containing multiplication tables from 1 through 10
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += i * j + "\t";
    }
    console.log(row);
  }
  