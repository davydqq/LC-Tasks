"use strict";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
     return this;
}

const addTwoNumbers = function(l1, l2) {
    const newListNode = new ListNode(0);
    let headOfNewListNode = newListNode;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;

        sum = carry;
        carry = 0;
    }

    return newListNode.next;
};


const last_31 = new ListNode(3, null);
const last_21 = new ListNode(4, last_31);
const last_11 = new ListNode(2, last_21);

const last_32 = new ListNode(4, null);
const last_22 = new ListNode(6, last_32);
const last_12 = new ListNode(5, last_22);


addTwoNumbers(last_11, last_12);