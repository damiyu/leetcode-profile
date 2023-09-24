package med.med138;
import java.util.*;

/*
 * 138: Copy List with Random Pointer
 * Last Updated: Sep 5, 2023
 * Solve Time: 29 min & 24 sec
 */
class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> nodes = new HashMap<>();
        Node newHead = new Node(0), newNode = newHead;

        while (head != null) {
            if (nodes.containsKey(head)) {
                newNode.next = nodes.get(head);
            } else {
                newNode.next = new Node(head.val);
            }

            newNode = newNode.next;
            nodes.put(head, newNode);
            if (head.random != null) {
                if (nodes.containsKey(head.random)) {
                    newNode.random = nodes.get(head.random);
                } else {
                    newNode.random = new Node(head.random.val);
                    nodes.put(head.random, newNode.random);
                }
            }

            head = head.next;
        }

        return newHead.next;
    }
}

// My Original Solution
/*class Solution {
    public Node copyRandomList(Node head) {
        Map<Integer, Integer> nodeIdxs = new HashMap<>();
        List<Node> nodes = new ArrayList<>();
        Node newHead = new Node(0), newNode = newHead, head = head, iterNode;
        int len, diff;

        for (len = 0; head != null; len++) {
            iterNode = head.random;
            for (diff = 0; iterNode != null; diff++) iterNode = iterNode.next;

            nodeIdxs.put(len, diff);
            newNode.next = new Node(head.val);
            newNode = newNode.next;
            nodes.add(newNode);
            head = head.next;
        }

        newHead = newHead.next;
        head = newHead;
        for (int i = 0; i < len; i++) {
            diff = len - nodeIdxs.get(i);
            head.random = diff == len ? null : nodes.get(diff);
            head = head.next;
        }

        return newHead == null ? null : newHead;
    }
}*/