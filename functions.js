//Crea una función que elimine el primer y último carácter de un string recibido por parámetros.

export function removeFirstAndLast(inputString) {
  let inputArray = inputString.split('');
  inputArray.pop();
  inputArray.shift();
  return inputArray.join('');
}
console.log(removeFirstAndLast('murcielago'));

// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.

export function isReversible(yourWord) {
  let midPoint = Math.ceil(yourWord.length / 2);
  for (let i = 0; i < midPoint; i++) {
    if (yourWord[i] !== yourWord[yourWord.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isReversible('osttso'));

// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

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

console.log(countVowels('murcielago'));

//4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama
// (contiene todas las letras del abecedario).

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

console.log(isPangram('Lorem Ipsum'));

// 5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.
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
console.log(hasAllVowels('Lorem Ipsum'));

//6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

export function countdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

console.log(countdown(5));

//
