const test = [ "ab#z", "az#z" ]
const test2 = [ "abc#d", "acc#c" ]
const test3 = [ "x#y#z#", "a#" ]
const test4 = [ "a###b", "b" ]
const test5 = [ "Ab#z", "ab#z" ]

const typedOutStrings = test => {
  S = test[0].split("")
  T = test[1].split("")

  const resultS = getResults(S)
  const resultT = getResults(T)

  console.log("S", resultS)
  console.log("T", resultT)

  if(resultS === resultT) {
    return true
  } else {
    return false
  }

}

const getResults = stringArray=> {
  let result = []

  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i] !== "#") {
      result.push(stringArray[i])
    } else {
      result = result.splice(0,result.length-1)
    }
  }

  return result.join("")
}


console.log(typedOutStrings(test4))
console.log(typedOutStrings(test5))
