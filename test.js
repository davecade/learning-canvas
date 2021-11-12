const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('santa')
  if(err) {
    console.log('error')
  }

  const input = data.toString()
  const arrayInput = input.split('')

  let result = 0

  // for(let i = 0; i < arrayInput.length; i++) {
  //   if(arrayInput[i] === '(') {
  //     result++
  //   } else if (arrayInput[i] === ')') {
  //     result--
  //   }
  // }
  // console.log(result)
  
  const finalResult = (() => {
    for(let i = 0; i < arrayInput.length; i++) {
      if(arrayInput[i] === '(') {
        result++
      } else if (arrayInput[i] === ')') {
        result--
      }
      if(result===-1) {
        return i+1
      }
    }
  })()
  console.log(finalResult)

  // let count = 0
  // arrayInput.some(item => {
  //   if(item === '(') {
  //     result++
  //   } else if (item === ')') {
  //     result--
  //   }
  //   count++
  //   return result === -1
  // })

  // console.log(count)

  console.timeEnd('santa')
})