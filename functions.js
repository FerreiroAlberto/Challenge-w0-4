export function removeFirstAndLast(inputString) {
  let inputArray = inputString.split('');
  inputArray.pop();
  inputArray.shift();
  return inputArray.join('');
}

export function isReversible(yourWord) {
  let midPoint = Math.ceil(yourWord.length / 2);
  for (let i = 0; i < midPoint; i++) {
    if (yourWord[i] !== yourWord[yourWord.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export function countVowels(inputWord) {
  let userWord = inputWord.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < inputWord.length; i++) {
    if (vowels.includes(inputWord[i])) {
      counter = counter + 1;
    }
  }
  return counter;
}

export function isPangram(userString) {
  let lowerString = userString.toLowerCase();
  let abc = 'abcdefghijklmnñopqrstuvwxyz';
  let abcArray = abc.split('');
  for (let i = lowerString.length; i >= 0; i--) {
    if (abcArray.includes(lowerString.charAt(i))) {
      let findCharacter = abcArray.indexOf(lowerString.charAt(i));
      abcArray.splice(findCharacter, 1);
    }
  }
  if (abcArray.length === 0) {
    return true;
  }
  return false;
}

export function hasAllVowels(userString) {
  let lowerString = userString.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = lowerString.length; i >= 0; i--) {
    if (vowels.includes(lowerString.charAt(i))) {
      let findCharacter = vowels.indexOf(lowerString.charAt(i));
      vowels.splice(findCharacter, 1);
    }
  }
  if (vowels.length === 0) {
    return true;
  }
  return false;
}

export function countdown(num) {
  let count = [];
  for (let i = num; i >= 0; i--) {
    count.push(i);
  }
  return count.join('\n');
}

export function getUserAge(year) {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - year;
}

export function isAdult(age) {
  return age >= 18 ? 'Mayor de edad' : 'Menor de edad';
}

export function castADice() {
  const randomNumber = Math.floor(Math.random() * 7);
  console.log(randomNumber);
  return randomNumber;
}

export function isLeapYear(year) {
  return year % 4 === 0
    ? `El año ${year} es bisiesto`
    : `El año ${year} no es bisiesto`;
}

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    console.log('Invalid choice');
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = 'paper';
  } else if (computerChoice === 1) {
    computerChoice = 'rock';
  } else if (computerChoice === 2) {
    computerChoice = 'scissors';
  }
  return computerChoice;
};
const determineWinner = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    console.log('El juego es un empate');
  } else if (userInput === 'paper' && computerChoice === 'rock') {
    console.log('Gana humano');
  } else if (userInput === 'paper' && computerChoice === 'scissors') {
    console.log('Gana computadora');
  } else if (userInput === 'rock' && computerChoice === 'scissors') {
    console.log('Gana humano');
  } else if (userInput === 'rock' && computerChoice === 'paper') {
    console.log('Gana computadora');
  } else if (userInput === 'rock' && computerChoice === 'scissors') {
    console.log('Gana humano');
  } else if (userInput === 'scissors' && computerChoice === 'paper') {
    console.log('Gana humano');
  } else if (userInput === 'scissors' && computerChoice === 'rock') {
    console.log('Gana computadora');
  }
};

export function playGame() {
  let userChoice = getUserChoice('PAPer');
  let computerChoice = getComputerChoice();
  console.log('Elegiste: ' + userChoice);
  console.log('La computadora eligió: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

export function getRandomUserData() {
  let names = [
    'Ross',
    'Rachel',
    'Phoebe',
    'Joey',
    'Monica',
    'Chandler',
    'Bill',
    'Mark',
    'Joe',
    'Donald',
  ];
  let surnames = [
    'Tribiani',
    'Geller',
    'Bouffe',
    'Bing',
    'Green',
    'Gates',
    'Jobs',
    'Cumberbatch',
    'Biden',
    'García',
  ];
  const randomNumber = Math.ceil(Math.random() * 100);
  const numberOfNames = names.length;
  const numberOfSurnames = surnames.length;
  const randomName = Math.floor(Math.random() * numberOfNames);
  const randomSurname = Math.floor(Math.random() * numberOfSurnames);
  const randomUser = `${names[randomName]} ${surnames[randomSurname]} ${randomNumber}`;
  return randomUser;
}

export function getTip(check, percentage) {
  let tip = check * (percentage / 100);
  let netTip = tip.toFixed(2);
  let total = Number(check) + Number(netTip);
  console.log(
    `Su cuenta es de ${check}€ más ${netTip}€ de propina. El total asciende a ${total}€ `
  );
}

export function getDiscount(price, percentage) {
  let discount = price * (percentage / 100);
  let netDiscount = discount.toFixed(2);
  let total = Number(price) - Number(netDiscount);
  console.log(
    `Precio anterior: ${price}€ menos ${netDiscount}€ de descuento. Total a pagar ${total}€ `
  );
}
