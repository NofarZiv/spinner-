
let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let time = 100;

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}   `);
  }, time);
  time = time + 200
}

