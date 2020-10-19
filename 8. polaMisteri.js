function pola(str) {
    let a= str.split(' ')
    let a1 = a[0]
    let a2 = a[2]
    let a3 = a[4]
    for (i = 0; i <= 9; i++) {
        for (j = 0; j <= 9; j++){   
            while (a1.replace('#', i) * a2 == a3.replace('#', j)) {
                return [i, j]  

        }
        
    }
}

}
console.log(pola("42#3 * 199 = 85#317")) 
console.log(pola("8#61 * 895 = 78410#5"))