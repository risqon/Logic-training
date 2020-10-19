function weirdMultiply(sentence) {
    let a = sentence.toString()
    let b = a.length
    let hasil = 1
    if (b > 1) {
        for (i = 0; i < b; i++) {
            hasil = hasil * a[i]


        }
        return weirdMultiply(hasil)
    } else {
        return sentence
    }
}




console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))