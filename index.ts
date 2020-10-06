function arrSum(arr: Array<any>): number{
  const reducer = (sum: number, i: any): number => {
    if(typeof i === 'number') {
      return sum + i
    }
    if(typeof i === 'object') {
      return i.reduce(reducer, sum)
    }
    return sum
  }

  return arr.reduce(reducer, 0)
}

const arr = [2,[1,3,4,6],3,'string',5, '5', [1]]

console.log(arrSum(arr))
