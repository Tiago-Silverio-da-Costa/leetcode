// This is basically a recursion solution.
// In each iteration of the recursion, it calculates the sum of the two digits at the current level (hundred, thousand, etc).
// Line by line goes like this.
// 2. Declaration of the recursion function which takes both nodes and optional rest (carry of the sum).
// 3. If there is no node or no carry, the function ends. This is the escape of the recursion.
// 4. Sums the value of the nodes and the rest too.
// 5. Goes into the recursion, declaring the return as the nextNode. The Math.floor calculates if the resulting sum is
// bigger than 10 and return 1 to carry over to the next digit or 0 to carry nothing. E.g. If the sum is 13 than the floor 
// will carry 1 over because floor of 1.3 is 1.
// 6. By having the nextNode as the result of the recursion you may now instantiate and return a new node with the 
// current sum and next node. The rest operator (%) here is used because the carry is already being calculated (rest),
// so it will only carry the unit. E.g. If the sum is 13, the rest of the division by 10 is 3 so the digit that will be 
// the val for this node is 3.
// 7. Start of the recursion which will result in the first node of the whole linked list.

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2)
  };
  
  addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))); // 7 -> 0 -> 8