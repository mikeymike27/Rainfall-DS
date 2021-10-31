function solution3(array) {
    let totalWater = 0
    let leftMax = []
    let rightMax = []

    leftMax[0] = array[0]
    rightMax[array.length - 1] = array[array.length - 1]
    
    for(i = 1; i < array.length; i++) {
        leftMax[i] = Math.max(array[i], leftMax[i - 1])
    }

    for(j = array.length - 2; j >= 0; j--) {
        rightMax[j] = Math.max(array[j], rightMax[j + 1])
    }

    for(k = 1; k < array.length - 1; k++) {
        totalWater += Math.min(leftMax[k], rightMax[k]) - array[k]
    }

    return totalWater;
}

console.log(solution3([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(solution3([4, 2, 0, 3, 2, 5]))