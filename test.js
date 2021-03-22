function digital_root(n) {
    let num
    while (num !== 'undefined' ? num.length > 1 : true) {
        const str = num.toString().split('')
        console.log(str.length)
        const numArr = str.map((s) => parseInt(s))
        console.log(numArr)
        num = numArr.reduce((a, b) => a + b, 0)
        console.log('new num: ', num)
        // console.log(num)
    }

    return num
    //console.log(numArr)
}

console.log(digital_root(127))
