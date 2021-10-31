function solution1(array) {
    let totalWater = 0
    for(i = 0; i < array.length; i++) {
        let leftMaxHeight = findLeftHighest(i, array)
        let rightMaxHeight = findRightHighest(i, array)
        if(leftMaxHeight != 0 && rightMaxHeight != 0) {
            minHeight = Math.min(leftMaxHeight, rightMaxHeight)
            totalWater += minHeight - array[i]
        }
    }

    return totalWater

}

function findLeftHighest(li, array) {
    let maxHeight = array[li]
    for(j = li-1; j >= 0; j--) {
        if(array[j] > maxHeight) {
            maxHeight = array[j]
        }
    }

    if(maxHeight == array[li]) {
        return 0
    }
    return maxHeight
}

function findRightHighest(ri, array) {
    let maxHeight = array[ri]
    for(k = ri+1; k < array.length; k++) {
        if(array[k] > maxHeight) {
            maxHeight = array[k]
        }
    }

    if(maxHeight == array[ri]) {
        return 0
    }

    return maxHeight
}

console.log(solution1([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(solution1([4, 2, 0, 3, 2, 5]))