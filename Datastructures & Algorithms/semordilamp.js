function semordnilap(words) {
    const doneWords = []
     const finalResult = [];


    words.forEach((word) => {
        if(!(doneWords.includes(word))){
            const reversedWord = reverseString(word);
            const restOfWords = words.filter((wordTwo) => wordTwo !== word);
    
            if (restOfWords.includes(reversedWord)) {
                finalResult.push([word, reversedWord]);
                doneWords.push(word)
                doneWords.push(reversedWord)
            }
        }
    });

     return finalResult;
}

function reverseString(str) {
     return str.split("").reverse().join("");
}

semordnilap(["diaper", "abc", "test", "cba", "repaid"]);
