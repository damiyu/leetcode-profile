package med.med1615;

/*
 * 1615: Maximal Network Rank
 * Last Updated: Aug 18, 2023
 */
public class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        short[] cnt = new short[n];
        int top = 0, sub = 0, max = 0, cur = 0;

        for (int[] r : roads) {
            cnt[r[0]]++;
            cnt[r[1]]++;
        }

        for (int num : cnt) {
            if (top < num) {
                sub = top;
                top = num;
            } else if (sub < num) sub = num;
        }

        for (short i = 0; i < n; i++) if (cnt[i] == top) max++;
        if (max == 1) {
            for (short i = 0; i < n; i++) if (cnt[i] == sub) max++;
            for (int[] r : roads) {
                if (cnt[r[0]] == top && cnt[r[1]] == sub) cur++;
                if (cnt[r[0]] == sub && cnt[r[1]] == top) cur++;
            }
            return cur < max - 1 ? top + sub : top + sub - 1;
        }

        for (int[] r : roads) if (cnt[r[0]] == top && cnt[r[1]] == top) cur++;
        max = (max * (max - 1)) >> 1;
        return cur < max ? top << 1 : (top << 1) - 1;
    }
}

// My Original Solution
/*class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        if (roads.length == 0) return 0;
        Map<Short, ArrayList<Short>> cities = new HashMap<>();
        ArrayList<Short> pair1 = new ArrayList<>(), pair2, city;
        short[] cnt = new short[n], sort;
        short r1, r2, val1, val2;

        for (short i = 0; i < roads.length; i++) {
            cnt[roads[i][0]]++;
            cnt[roads[i][1]]++;

            for (byte b = 0; b < 2; b++) {
                r1 = (short) roads[i][b];
                r2 = (short) roads[i][1 - b];

                if (cities.containsKey(r1)) {
                    city = cities.get(r1);
                    city.add(r2);
                    cities.replace(r1, city);
                } else {
                    city = new ArrayList<>();
                    city.add(r2);
                    cities.put(r1, city);
                }
            }
        }

        sort = cnt.clone();
        Arrays.sort(sort);
        val1 = sort[n - 1];
        if (sort[n - 2] != val1) {
            pair2 = new ArrayList<>();
            val2 = sort[n - 2];

            for (short i = 0; i < n; i++) {
                if (cnt[i] == val1) pair1.add(i);
                else if (cnt[i] == val2) pair2.add(i);
            }

            city = cities.get(pair1.get(0));
            for (short i = 0; i < pair2.size(); i++) {
                if (!city.contains(pair2.get(i))) return val1 + val2;
            }
            return val1 + val2 - 1;
        }

        for (short i = 0; i < n; i++) if (cnt[i] == val1) pair1.add(i);
        for (short i = 0; i < pair1.size(); i++) {
            city = cities.get(pair1.get(i));

            for (int j = i + 1; j < pair1.size(); j++) {
                if (!city.contains(pair1.get(j))) return val1 << 1;
            }
        }

        return (val1 << 1) - 1;
    }
}*/