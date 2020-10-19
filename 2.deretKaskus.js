function deretKaskus(n) {
    let a = []
    let angka = n * 3
    for (i = 3; i <= angka; i += 3) {
        if (i % 6 === 0 && i % 5 === 0) {
            a.push('KASKUS')
        } else if (i % 5 === 0) {
            a.push('KAS')
        } else if (i % 6 === 0) {
            a.push('KUS')
        } else {
            a.push(i)
        }



    }
    return a
}
console.log(deretKaskus(10))