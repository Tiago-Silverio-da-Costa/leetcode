/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: Array<number>, l2: Array<number>): any | null {

  for (let i = 0; i < l1.length; i++) {
 // get array 
  const firstValue = l1.join("").split(",")
  const secondValue = l2.join("").split(",")
  const result = (Number(firstValue) + Number(secondValue))
 // transform the all item in array a single number
 // sum with other array
 // answer reverse and in array 
 console.log("l1", [result].slice(l1.length).reverse())
  }
}

addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7,0,8]
