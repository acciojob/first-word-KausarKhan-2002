function firstWord(s) {
 // write your code here
 if (s === '') return ''

 let str = s.trim()
 let indexS = str.indexOf(' ')
  
 if (indexS === -1) return s

 return str.slice(0, indexS)
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
