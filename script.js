function firstWord(s) {
  // your code here
  let space = false;

  // If str is empty return str
  if (str == "") {
    return ""
  }

  // If str does not include space
  for (let chr of str) {
    if (chr == " ") {
      space = true;
      break;
    }
  }
  if (space == false) return str;

  // return first word up to the first space
  let strTrim = str.trimStart()
  let newStr = ""
  for (let chr of strTrim) {
    if (chr != " ") newStr += chr
    else return newStr
  }
}

// Do not change the code below

// const s = prompt("Enter String:")
alert(firstWord(s));
