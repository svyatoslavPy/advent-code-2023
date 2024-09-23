// GET FILE INPUT
const fs = require("fs");

// func for readfile from text
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString().split("\n");
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
};

// data
const calibrationValues = readFile("./data.txt");

// func for get only numbers
const getNumbers = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const filteredString = value
      .split("")
      .filter((str) => parseInt(str) || parseInt(str) === 0)
      .join("");

    result.push(filteredString);
  }

  return result;
};

// get sum from pairs digit (first num and last num)
const getSumPairsFromDigits = (array) => {
  const result = [];

  for (const digit of array) {
    const firstDigit = digit[0];
    const lastDigit = digit[digit.length - 1];

    if (!firstDigit || !lastDigit) continue;

    const resultDigit = firstDigit + lastDigit;
    result.push(+resultDigit);
  }

  return result;
};

// func for just get sum
const getSum = (array) => {
  let sum = 0;

  for (const item of array) {
    sum += item;
  }

  return sum;
};

const onlyDigitsFromArray = getNumbers(calibrationValues);
const sumArrayFromPairsDigit = getSumPairsFromDigits(onlyDigitsFromArray);
const resultSum = getSum(sumArrayFromPairsDigit);

console.log(resultSum);
