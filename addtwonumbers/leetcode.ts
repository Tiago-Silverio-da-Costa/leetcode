class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
  }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
) {

  if (!l1) return l2;
  if (!l2) return l1;

  let dummy: ListNode = new ListNode(0) // Cria um nó dummy para iniciar
  let current: ListNode = dummy // Ponteiro para o nó atual na lista resultante
  let carry: number = 0;
  
  while (l1 || l2 || carry) {
    const x: number = l1 ? l1.val : 0;
    const y: number = l2 ? l2.val : 0;

    const sum: number =  x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next // Retorne o próximo nó após o dummt, que é a lista resultante
}

// Exemplo de uso: 
const l1: ListNode = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2: ListNode = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result: ListNode | null = addTwoNumbers(l1, l2);

// Função para converter a lista encadeada em uma matriz para facilitar a visualização
function linkedListToArray(head: ListNode | null): number[] {
  const resultArray: number[] = [];
  while (head) {
    resultArray.push(head.val);
    head = head.next;
  }
  return resultArray
}

console.log(linkedListToArray(result).reverse())