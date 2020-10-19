function spiral(param1) {
    let array = []
    let count = 0
    for (i = 0; i < param1; i++) {
        array[i] = []
        for (j = 0; j < param1; j++) {
            array[i][j] = count
            count++
        }
    }
    console.log(array)
    let a = array.length;
    let startRow = 0;
    let endRow = a - 1;
    let startColumn = 0;
    let endColumn = a - 1
    let newArray = [];

    while (startRow <= endRow && startColumn <= endColumn) {

        for (let i = startColumn; i <= endColumn; i++) {
            newArray.push(array[startColumn][i]);
        } startRow++;

        for (let i = startRow; i <= endRow; i++) {
            newArray.push(array[i][endColumn]);
        } endColumn--;
        for (let i = endColumn; i >= startColumn; i--) {
            newArray.push(array[endRow][i]);
        } endRow--;
        for (let i = endRow; i >= startRow; i--) {
            newArray.push(array[i][startColumn]);
        } startColumn++;
    }
    console.log(newArray);
}/*  */

spiral(5)
spiral(6)
spiral(7)