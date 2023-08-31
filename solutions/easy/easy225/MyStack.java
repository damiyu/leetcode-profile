package easy.easy225;
import java.util.*;

/*
 * 225: Implement Stack using Queues
 * Last Updated: Aug 28, 2023
 * Solve Time: 17 min & 41 sec
 */
public class MyStack {
    Queue<Integer> ori, back, hold;

    public MyStack() {
        ori = new LinkedList<>();
        back = new LinkedList<>();
    }
    
    public void push(int x) {
        back.add(x);

        while (!ori.isEmpty()) back.add(ori.poll());
        hold = back;
        back = ori;
        ori = hold;
    }
    
    public int pop() {
        return ori.poll();
    }
    
    public int top() {
        return ori.peek();
    }
    
    public boolean empty() {
        return ori.isEmpty();
    }
}