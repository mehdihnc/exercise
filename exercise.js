export function calcul(r) {
  return 3.1459 * r * r;
}

export function findYear(startYear, endYear) {
  for (let i = startYear; i <= endYear; i++) {
    const condition = new Date(i, 0, 1).getDay() === 0;
    if (condition) console.log("1st January is being a Sunday ${i}");
  }
}

findYear(2014, 2050);

export function fibonacci(nbr) {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;

  for (let i = 2; i <= nbr; i++) {
    somme = n1 + n2;
    n1 = n2;
    n2 = somme;
  }

  return nbr ? n2 : n1;
}

 const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

export function rot13(str) {
  let accumulator = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabet.includes(char);
    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex((c) => c === char);

      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return accumulator;
}

console.log(rot13('SERR PBQR PNZC'));
