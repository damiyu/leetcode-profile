/*
 * 948: Bag of Tokens
 * Last Updated: Mar 3, 2024
 * Solve Time: 24 min & 26 sec
 */
var bagOfTokensScore = function(tokens, power) {
    let n = tokens.length, score = 0;

    tokens.sort((a, b) => a - b);
    for (let i = 0, j = n - 1; i <= j; i++) {
        if (power >= tokens[i]) {
            power -= tokens[i];
            score++;
        } else if (score > 0 && tokens[i] < tokens[j]) {
            power += tokens[j--] - tokens[i];
        } else {
            break;
        }
    }

    return score;
};