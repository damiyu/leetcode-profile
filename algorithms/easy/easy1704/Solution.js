/* 
 * 1704: Determine if String Halves Are Alike
 * Last Updated: Jan 11, 2024
 * Solve Time: 21 min & 1 sec
 */
var halvesAreAlike = function(s) {
    let n = s.length, cntOne = 0, cntTwo = 0;

    for (let i = 0; i < n / 2; i++) {
        let c = s[i];

        if (c == 'A' || c == 'a') cntOne++;
        else if (c == 'E' || c == 'e') cntOne++;
        else if (c == 'I' || c == 'i') cntOne++;
        else if (c == 'O' || c == 'o') cntOne++;
        else if (c == 'U' || c == 'u') cntOne++;
    }

    for (let i = n / 2; i < n; i++) {
        let c = s[i];

        if (c == 'A' || c == 'a') cntTwo++;
        else if (c == 'E' || c == 'e') cntTwo++;
        else if (c == 'I' || c == 'i') cntTwo++;
        else if (c == 'O' || c == 'o') cntTwo++;
        else if (c == 'U' || c == 'u') cntTwo++;
    }

    return cntOne == cntTwo;
}