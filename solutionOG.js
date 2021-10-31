function solution2(array) {
    let totalWater = 0
    let maxHeight = findMaxHeight(array)
    for(i = 1; i <= maxHeight; i++) {
        let leftBorder = findLeftBorder(i, array)
        let rightBorder = findRightBorder(i, array)
        if(leftBorder == rightBorder) {
            return totalWater
        }
        for(j = leftBorder + 1; j < rightBorder; j++) {
            if(array[j] < i) {
                totalWater++
            }
        }
    }
    return totalWater
}

function findMaxHeight(array) {
    return Math.max(...array)
}

function findLeftBorder(height, array) {
    for(j = 0; j < array.length; j++) {
        if(array[j] >= height) {
            return j
        }
    }
    return 0
}

function findRightBorder(height, array) {
    for(k = array.length - 1; k >= 0; k--) {
        if(array[k] >= height) {
            return k
        }
    }
    return 0
}

console.log(solution2([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(solution2([4, 2, 0, 3, 2, 5]))