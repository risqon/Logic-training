function indexPrime(param1) {
    var prime = []
    var ada = 0
    indeks = 0
    var i = 3
    while (indeks <= param1) {
        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                ada++
            }
        }
        if (ada === 2) {
            prime.push(i)
            indeks++;
        }
        ada = 0
        i += 2
    }
    return prime[indeks - 3]
}



console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))

