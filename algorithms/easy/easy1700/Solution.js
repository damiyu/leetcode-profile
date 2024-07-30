/*
 * 1700: Number of Students Unable to Eat Lunch
 * Last Updated: Apr 8, 2024
 * Solve Time: 6 min & 50 sec
 */
var countStudents = function(students, sandwiches) {
    let n = students.length, ones = students.reduce((a, b) => a + b), zeros = n - ones;

    for (let i = 0; i < n; i++) {
        if (sandwiches[i]) {
            if (--ones < 0) return zeros;
        } else if (--zeros < 0) {
            return ones;
        }
    }

    return 0;
};