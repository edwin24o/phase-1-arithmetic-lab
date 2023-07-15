const num1 = 2;
const num2 = 31;
const num3 = 4;
const num4 = 16;

const multiply = num1 * num2;

const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

function calculateMod() {
  let num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  while (num % 4 !== 0) {
    num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  return num;
}

const mod = num3 % num4;

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20];
const max = Math.max(...numbers);