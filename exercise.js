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

export function caesarCipher(string, shift) {
  let resultArray = [];
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i) + shift;
    while (code > 122) {
      code = code - 122 + 96;
    }
    resultArray.push(String.fromCharCode(code));
  }
  return resultArray.join("");
}
