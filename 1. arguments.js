function sum() {
    console.log(arguments)
    var max = 0
    for (x = 0; x < arguments.length; x++) {
        max = max + arguments[x]
    }
    console.log(max)
}



sum(1, 2, 7)
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9)
