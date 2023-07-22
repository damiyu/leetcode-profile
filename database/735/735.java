import java.util.*;

class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        List<Integer> rocks = new ArrayList<Integer>();
        for (int num : asteroids) rocks.add(num);
        boolean noCrash = false;
        int curAst = 0;

        while(!noCrash) {
            int astId = 0;
            noCrash = true;

            for (int i = 1; i < rocks.size(); i++) {
                curAst = rocks.get(astId);

                if ((curAst ^ rocks.get(i)) > 0 || curAst < 0 && rocks.get(i) > 0) {
                    astId = i;
                } else if (curAst > 0 && rocks.get(i) < 0) {
                    if (curAst + rocks.get(i) > 0) {
                        rocks.remove(i);
                        i--;
                    } else if (curAst + rocks.get(i) < 0) {
                        rocks.remove(astId);
                        i--;
                        curAst = rocks.get(i);
                        astId = i;
                    } else {
                        rocks.remove(astId);
                        rocks.remove(i - 1);
                        i--;
                    }

                    noCrash = false;
                }
            }
        }

        int[] result = new int[rocks.size()];
        for (int i = 0; i < result.length; i++) result[i] = rocks.get(i);
        return result;
    }
}