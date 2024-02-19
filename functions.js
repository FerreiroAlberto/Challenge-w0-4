export function removeFirstAndLast(inputString) {
  let inputArray = inputString.split('');
  inputArray.pop();
  inputArray.shift();
  return inputArray.join('');
}

// CORRECCIÓN
// return inputString.slice(1, -1)
//le estamos diciendo: empieza en la posición 1, es decir, quita la 0
// y acaba en la -2 (porque este método no incluye la posición final)
//primer parámetro: The index of the first character to include in the returned substring.
//segundo parámetro: The index of the first character to exclude from the returned substring.

export function isReversible(yourWord) {
  let midPoint = Math.ceil(yourWord.length / 2);
  for (let i = 0; i < midPoint; i++) {
    if (yourWord[i] !== yourWord[yourWord.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// CORRECCIÓN
//En vez de dividir la palabra en dos cachos y compararlos se puede darla vuelta a la palabra
//y ver si es igual a la palabra de entrada. Hace falta toLowerCase.
// const reversedWord = yourWord.split('').reverse('').join('');
//return yourWord.toLowerCase() === reversedWord.toLowerCase();
//Habría que tener en cuenta también los acentos haciendo una función nueva y llamándola desde aquí
//
// function eliminarDiacriticos(texto) {
//    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
//}
// también se puede hacer convirtiendo el string de entrada en array (para recorrerlo y quitar cosas)
// hacemos un bucle y 5 ifs para cambiar una a una las 5 vocales acentuadas y la ü
//

export function countVowels(inputWord) {
  let userWord = inputWord.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'];
  let counter = 0;
  for (let i = 0; i < inputWord.length; i++) {
    if (vowels.includes(userWord[i])) {
      counter = counter + 1;
    }
  }
  return counter;
}

//Aquí se podría usar la func. de antes que normaliza los caracteres diacríticos
//
//

export function isPangram(userString) {
  let lowerString = userString.toLowerCase();
  let abc = 'abcdefghijklmnñopqrstuvwxyz';
  let abcArray = abc.split('');
  for (let i = lowerString.length; i >= 0; i--) {
    if (abcArray.includes(lowerString.charAt(i))) {
      let foundCharacter = abcArray.indexOf(lowerString.charAt(i));
      abcArray.splice(foundCharacter, 1);
    }
  }
  if (abcArray.length === 0) {
    return true;
  }
  return false;
}

//convierto a lowerString
// declaro abc, no convierto a array
//for (let i=0; i<abc.length; i++){
// if(!lowerString.includes(abc[i])) {
//  return false;
// } return true;
// };
//

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

//Standard ISO para fechas: vamos de mayor a menor: 1981-10-16T00:00:00:00:000Z
//horas:minutos:segundos:milisegundos:meridiano
//le podemos quitar cosas del final sin perder el estandar
//podemos hacer:
// let dateIso= '1998-12-31'
//
//const isAdultB = (dateIso)=>{
// const date = new Date(dateIso)
// const now = new Date();
// const currentYear = now.getFullYear();
// const age = currentYear - date.getFullYear();
// if (age >= 18){
// return true
//}
//return false
// }
// Esta no tiene en cuenta el mes de nacimiento. Hacemos una que sí:
//const time = now - date (en milisegundos, sin convertir a nada)
//const age = time / 1000 / 60 / 60 / 24 / 365.25
//if(age >=18)...

export function castADice() {
  const randomNumber = Math.ceil(Math.random() * 6);
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

export function playGame(humanChoice) {
  let userChoice = getUserChoice(humanChoice);
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
  let tip = check * percentage;
  let total = check + tip;
  if (tip % 1 !== 0) {
    tip = tip.toFixed(2);
  }
  if (total % 1 !== 0) {
    total = total.toFixed(2);
  }
  const Bill = { total: check, tip: tip, totalToPay: total };
  console.log(Bill);
  return Bill;
}

export function getDiscount(price, percentage) {
  let discount = price * percentage;
  let netDiscount = discount.toFixed(2);
  let total = price - netDiscount;
  console.log(
    `Precio anterior: ${price}€ menos ${netDiscount}€ de descuento. Total a pagar ${total}€ `
  );
}
