function firstWord(s) {
  // your code here
 if (str === '') {
    return "''"
  }

  let indexS = str.indexOf(' ')
  
  if (indexS === -1) {
    return `'${str}'`
  }

  return `'${str.slice(0, indexS)}'`
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
