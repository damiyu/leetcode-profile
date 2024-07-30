/*
 * 2073: Time Needed to Buy Tickets
 * Last Updated: Apr 8, 2024
 * Solve Time: 5 min & 36 sec
 */
var timeRequiredToBuy = function(tickets, k) {
    const n = tickets.length, cnt = tickets[k];

    let time = 1;
    for (let i = 0; i < n; i++) {
        if (i < k) time += tickets[i] < cnt ? tickets[i] : cnt;
        else time += tickets[i] < cnt ? tickets[i] : cnt - 1;
    }

    return time;
};