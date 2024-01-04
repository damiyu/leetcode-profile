/*
 * 2706: Buy Two Chocolates
 * Last Updated: Dec 20, 2023
 * Solve Time: 16 min 27 sec
 */
int buyChoco(int* prices, int pricesSize, int money) {
    int fst = 101, snd = 101;

    for (int i = 0; i < pricesSize; i++) {
        if (*prices < fst) {
            snd = fst;
            fst = *prices;
        } else if (*prices < snd) {
            snd = *prices;
        }
        *prices++;
    }

    return fst + snd > money ? money : money - (fst + snd);
}