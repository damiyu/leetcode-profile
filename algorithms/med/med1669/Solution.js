/*
 * 1669: Merge In Between Linked Lists
 * Last Updated: Mar 20, 2024
 * Solve Time: 8 min & 25 sec
 */
var mergeInBetween = function(list1, a, b, list2) {
    let head = list1, idx = 0;

    while (idx++ < a - 1) list1 = list1.next;

    let skip = list1.next, listEnd = list2;
    while (idx++ < b + 1) skip = skip.next;
    while (listEnd.next != null) listEnd = listEnd.next;

    listEnd.next = skip;
    list1.next = list2;
    return head;
};