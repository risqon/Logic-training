function stringManipulation(word) {
    if (
        word.charAt(0) == 'a' ||
        word.charAt(0) == 'i' ||
        word.charAt(0) == 'u' ||
        word.charAt(0) == 'e' ||
        word.charAt(0) == 'o') {
        return (word)
    } else {
        return (word.slice(1) + word.charAt(0) + 'nyo')
    }
}

function sentencesManipulation(sentence) {
    let hasil = sentence.split(' ')
    let a = []
    for (let i = 0; i < hasil.length; i++) {
        a.push(stringManipulation(hasil[i]))

    }
    console.log(a.join('  '))
}

sentencesManipulation('ibu pergi ke pasar bersama aku')
