function solution4 (array) {
    let n = array.length - 1
    let totalWater = 0
    let leftPointerIndex = 0
    let rightPointerIndex = n
    let leftMax = array[leftPointerIndex]
    let rightMax = array[rightPointerIndex]

    while(leftPointerIndex <= rightPointerIndex) {
        leftMax = Math.max(leftMax, array[leftPointerIndex])
        rightMax = Math.max(rightMax, array[rightPointerIndex])
        if(leftMax <= rightMax) {
            totalWater += leftMax - array[leftPointerIndex]
            leftPointerIndex++
        } else if(rightMax <= leftMax) {
            totalWater += rightMax - array[rightPointerIndex]
            rightPointerIndex--
        }
    }
    return totalWater
}

console.log(solution4([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(solution4([4, 2, 0, 3, 2, 5]))