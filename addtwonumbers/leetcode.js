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
function addTwoNumbers(l1, l2) {
      // get array
      var firstValue = l1.join("").split(",");
      var secondValue = l2.join("").split(",");
      var result = Number(firstValue) + Number(secondValue);
      // transform the all item in array a single number
      // sum with other array
      // answer reverse and in array
      console.log(result.toString().split().concat().reverse());
}
addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7,0,8]
