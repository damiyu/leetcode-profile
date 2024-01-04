/*
 * 1758: Minimum Changes To Make Alternating Binary String
 * Last Updated: Dec 24, 2023
 * Solve Time: 11 min & 8 sec
 */
int minOperations(char* s) {
    int n = strlen(s), cnt1 = 0, cnt2 = 0;

    for (int i = 0; i < n; i++) {
        cnt1 += i % 2 == 0 && *s != '0' || i % 2 == 1 && *s != '1' ? 1 : 0;
        cnt2 += i % 2 == 0 && *s != '1' || i % 2 == 1 && *s != '0' ? 1 : 0;
        *s++;
    }
    return cnt1 < cnt2 ? cnt1 : cnt2;
}