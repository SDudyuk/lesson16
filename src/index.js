const reversedNumber = (number) => {
  return +Array.from(number.toString())
               .reverse()
               .join('');
}

const isNumberPalindrom = (number) => {
  return number === reversedNumber(number);
}

function findPalindrom(number, step = 0) {
  try {
    if (isNumberPalindrom(number)) {
      return {
        "result": number,
        "steps": step
      }
    }
    return findPalindrom(number + reversedNumber(number), step + 1);
  } catch {
    console.log('Паліндром не знайдено! Досягнуто максимальне число кроків - ', step);
  }
}

console.log(findPalindrom(312));
console.log(findPalindrom(96));
console.log(findPalindrom(89));
console.log(findPalindrom(196));