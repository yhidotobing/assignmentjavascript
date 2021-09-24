/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100

for (let counter = 2; counter <= 100; counter++) {
  let Prime = true;
  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      Prime = false;
    }
  }
  if (Prime === true) {
    console.log(counter);
  }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 0;
let fiftiethPrime = 0;
let i = 2;
while (primeCounter < 50) {
  let Prime = true;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && i !== j) {
      Prime = false;
    }
  }
  if (Prime === true) {
    primeCounter++;
    fiftiethPrime = i;
  }
  i++;
}
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
let fiftiethOdd;
let i = 1;
do {
  if (i % 2 === 1) {
    oddCounter++;
    fiftiethOdd = i;
  }
  i++;
} while (oddCounter < 50);
console.log(fiftiethOdd);
console.log(oddCounter);
