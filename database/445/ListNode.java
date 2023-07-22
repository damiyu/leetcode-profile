public class ListNode {
    int val;
    ListNode next;

    public ListNode() {
        val = 0;
        next = null;
    }

    public ListNode(int val) {
        this.val = val;
        next = null;
    }

    public ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    /*public int getVal() {
        return val;
    }

    public ListNode getNext() {
        return next;
    }*/
}
