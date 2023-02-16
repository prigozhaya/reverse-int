module.exports = function reverse (n) {
    n=Math.abs(n)
    let arr=[];
    arr=n.toString().split('').reverse().join("")
    return +arr
    }
