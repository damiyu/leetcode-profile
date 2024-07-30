/*
 * 402: Remove K Digits
 * Last Updated: Apr 10, 2024
 */
var removeKdigits = function(num, k) {
    const chars = new Array;
    let shifted = 0;

    for (let n of num) {
        while (chars.length && n < chars[chars.length - 1] && shifted < k) {
            chars.pop();
            shifted++;
        }

        chars.push(n);
    }
    
    for (let i = shifted; i < k; i++) chars.pop();    
    while (chars.length && chars[0] == "0") chars.shift();

    return chars.length ? chars.join("") : "0";
};

// Original Solution
/*var removeKdigits = function(num, k) {
    let chars = num.split("");

    while (k) {
        if (k-- >= chars.length) return "0";

        let temp, alter = false, i;
        for (i = 0; i < chars.length - 1; i++) {
            if (chars[i] > chars[i + 1]) {
                alter = true;
                break;
            }
        }

        if (alter) {
            temp = chars.slice(0, i).concat(chars.slice(i + 1, chars.length));
        } else {
            while (k) {
                chars.pop();
                k--;
            }

            chars.pop();
            return chars.join("");
        }

        while (temp[0] == '0') {
            temp.shift();
            i--;
        }
        chars = temp;
    }

    if (chars.length == 0) return "0";
    return chars.join("");
};*/