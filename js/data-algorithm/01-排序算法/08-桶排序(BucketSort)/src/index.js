import Sorter from './sorter'

const sorter = new Sorter([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
console.log(`桶排序前：${sorter.items}`)
console.log(`升序：${sorter.bucketSort()}`)
console.log(`降序：${sorter.bucketSort('desc')}`)