#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 2402: Meeting Rooms III
 * Last Updated: Feb 23, 2024
 */
class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {
        int* room_cnts = (int*) calloc(n , sizeof(int));
        int* cur_meetings = (int*) calloc(n , sizeof(int));
        int m = meetings.size(), room_idx = -1, room_cnt = -1;
        long prev = 0;

        sort(meetings.begin(), meetings.end());
        for (int i = 0; i < m; i++) {
            int start = meetings[i][0], end = meetings[i][1], smallest_val = INT_MAX;
            bool used = false;

            for (int j = 0; j < n; j++) {
                if (prev < start) cur_meetings[j] -= start - prev;
                if (cur_meetings[j] < 0) cur_meetings[j] = 0;

                if (cur_meetings[j] < smallest_val) smallest_val = cur_meetings[j];
                if (!used && cur_meetings[j] == 0) {
                    cur_meetings[j] = end - start;
                    room_cnts[j]++;
                    used = true;
                }
            }

            prev = prev < start ? start : prev;
            if (!used) {
                prev += smallest_val;

                for (int j = 0; j < n; j++) {
                    cur_meetings[j] -= smallest_val;
                    
                    if (!used && cur_meetings[j] == 0) {
                        cur_meetings[j] = end - start;
                        room_cnts[j]++;
                        used = true;
                    }
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (room_cnt < room_cnts[i]) {
                room_idx = i;
                room_cnt = room_cnts[i];
            }
        }
        free(room_cnts);
        free(cur_meetings);
        return room_idx;
    }
};