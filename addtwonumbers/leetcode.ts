class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// my way
// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ) {

//   if (!l1) return l2;
//   if (!l2) return l1;

//   let dummy: ListNode = new ListNode(0) // Cria um nó dummy para iniciar
//   let current: ListNode = dummy // Ponteiro para o nó atual na lista resultante
//   let carry: number = 0;

//   while (l1 || l2 || carry) {
//     const x: number = l1 ? l1.val : 0;
//     const y: number = l2 ? l2.val : 0;

//     const sum: number =  x + y + carry;
//     carry = Math.floor(sum / 10);

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//   }

//   return dummy.next // Retorne o próximo nó após o dummt, que é a lista resultante
// }

// Exemplo de uso:
// const l1: ListNode = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// const l2: ListNode = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// const result: ListNode | null = addTwoNumbers(l1, l2);

// Função para converter a lista encadeada em uma matriz para facilitar a visualização
// function linkedListToArray(head: ListNode | null): number[] {
//   const resultArray: number[] = [];
//   while (head) {
//     resultArray.push(head.val);
//     head = head.next;
//   }
//   return resultArray
// }

// console.log(linkedListToArray(result).reverse())

// community way

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


var addTwoNumbers = function (l1: ListNode | null, l2: ListNode | null): ListNode {
  const iter: (
    n1: ListNode | null | undefined,
    n2: ListNode | null | undefined,
    rest?: number
  ) => ListNode | null
  = (
    n1: ListNode | null | undefined,
    n2: ListNode | null | undefined,
    rest: number = 0
  ) => {
    if (!l1 && !l2 && !rest) return null;
    const newVal = (l1?.val || 0) + (l2?.val || 0) + rest;
    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  };
  return iter(l1, l2) as ListNode;
};

addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))); // 7 -> 0 -> 8